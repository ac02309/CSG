// Normalise Shopify / WooCommerce public data into one shape, then run the checks.
// Rule: only flag what the public data can actually show. If a field is not published, say so; never guess.

export const ISSUE_TYPES = {
  shared_sku: {
    label: 'Shared SKUs',
    severity: 'error',
    cost: 'Stock sync and order systems match items on SKU. When two items share one, stock counts land on the wrong item and overselling follows.',
    fix: 'Give each variant its own SKU.',
  },
  missing_sku: {
    label: 'Missing SKUs',
    severity: 'error',
    cost: 'With no SKU, stock, warehouse and marketplace systems have nothing to match the item on, so it is skipped or kept in step by hand.',
    fix: 'Add a unique SKU to this variant.',
  },
  missing_barcode: {
    label: 'Missing barcodes (GTINs)',
    severity: 'error',
    cost: 'Missing barcodes can stop products appearing on Google Shopping and on marketplaces that require a GTIN.',
    fix: 'Add the manufacturer barcode (GTIN, EAN or UPC). For your own-brand goods, note that in your feed instead.',
  },
  missing_image: {
    label: 'Products with no images',
    severity: 'error',
    cost: 'Google Shopping rejects listings without an image, and shoppers rarely buy what they cannot see.',
    fix: 'Upload at least one product image.',
  },
  variant_image: {
    label: 'Variants without their own image',
    severity: 'notice',
    cost: 'Shoppers who pick this option still see another option’s photo, and feeds show the same image for every variant.',
    fix: 'Assign an image to this variant, as its siblings have.',
  },
  missing_weight: {
    label: 'Shipped products with no weight',
    severity: 'error',
    cost: 'Shipping rates are worked out from weight. A zero weight means checkout can charge too little, or offer the wrong service, for these items.',
    fix: 'Enter the packed weight for this variant.',
  },
  missing_type: {
    label: 'Missing product types',
    severity: 'warning',
    cost: 'Automated collections, filters and feed category mapping rely on the product type. Untyped products drop out of them.',
    fix: 'Set a product type that matches your existing ones.',
  },
  clashing_type: {
    label: 'Clashing product types',
    severity: 'warning',
    cost: 'Collections and filters treat each spelling as a different type, so related products are split across them or left out.',
    fix: 'Use one spelling for this type across the catalogue.',
  },
  no_description: {
    label: 'Products with no description',
    severity: 'warning',
    cost: 'A blank product page gives shoppers and search engines little to go on, and Google Shopping expects a description.',
    fix: 'Write a short description: what it is, what it is made of, sizes or dimensions.',
  },
  duplicate_title: {
    label: 'Duplicate product titles',
    severity: 'warning',
    cost: 'Identical titles make products hard to tell apart in search, feeds and reports, and feeds may treat them as duplicates.',
    fix: 'Make each title distinct, for example by adding colour, size or material.',
  },
  zero_price: {
    label: 'Zero or blank prices',
    severity: 'error',
    cost: 'An item priced at zero can be ordered for nothing, and Google Shopping disapproves it. Ignore this if the item is meant to be free.',
    fix: 'Set the correct price, or hide the item if it is not for sale.',
  },
  compare_below_price: {
    label: '“Was” price lower than the price',
    severity: 'warning',
    cost: 'The comparison price is below the selling price, so the store can show a price rise as a reduction, which misleads shoppers.',
    fix: 'Raise the comparison price above the selling price, or clear it.',
  },
};

export const ISSUE_ORDER = Object.keys(ISSUE_TYPES);

const stripHtml = (s) => String(s || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&[a-z#0-9]+;/gi, 'x').replace(/\s+/g, ' ').trim();
const num = (v) => {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};
const hasKey = (o, k) => o && Object.prototype.hasOwnProperty.call(o, k);

// ---------- Shopify ----------
export function normaliseShopify(rawProducts, origin) {
  const vis = { barcode: false, weight: false, requiresShipping: false, variantImages: true };
  const products = rawProducts.map((p) => {
    const url = `${origin}/products/${p.handle}`;
    const images = Array.isArray(p.images) ? p.images : [];
    const imagedVariantIds = new Set(images.flatMap((im) => im.variant_ids || []));
    const variants = (p.variants || []).map((v) => {
      if (hasKey(v, 'barcode')) vis.barcode = true;
      if (hasKey(v, 'grams') || hasKey(v, 'weight')) vis.weight = true;
      if (hasKey(v, 'requires_shipping')) vis.requiresShipping = true;
      const grams = hasKey(v, 'grams') ? num(v.grams) : hasKey(v, 'weight') ? num(v.weight) : undefined;
      return {
        id: v.id,
        title: v.title && v.title !== 'Default Title' && (p.variants || []).length > 1 ? v.title : '',
        url: `${url}?variant=${v.id}`,
        sku: v.sku == null ? '' : String(v.sku).trim(),
        barcode: hasKey(v, 'barcode') ? (v.barcode == null ? '' : String(v.barcode).trim()) : undefined,
        price: num(v.price),
        priceRaw: v.price,
        compareAt: num(v.compare_at_price),
        requiresShipping: hasKey(v, 'requires_shipping') ? v.requires_shipping !== false : undefined,
        weight: grams === null ? 0 : grams,
        hasOwnImage: Boolean(v.featured_image) || Boolean(v.image_id) || imagedVariantIds.has(v.id),
      };
    });
    return {
      id: p.id,
      title: String(p.title || '').trim(),
      url,
      types: p.product_type && String(p.product_type).trim() ? [String(p.product_type).trim()] : [],
      description: stripHtml(p.body_html),
      imageCount: images.length,
      variants,
    };
  });
  return { products, visibility: vis, typeWord: 'product type' };
}

// ---------- WooCommerce Store API ----------
const GTIN_KEYS = ['global_unique_id', 'gtin', 'ean', 'upc', 'isbn', 'barcode'];
const GTIN_ATTR = /\b(gtin|ean|upc|isbn|barcode)\b/i;
function wooGtin(item) {
  for (const k of GTIN_KEYS) if (hasKey(item, k)) return { visible: true, value: String(item[k] ?? '').trim() };
  const attr = (item.attributes || []).find((a) => GTIN_ATTR.test(a.name || ''));
  if (attr) return { visible: true, value: String((attr.terms || []).map((t) => t.name).join('') || attr.value || '').trim() };
  return { visible: false, value: '' };
}
function wooPrice(prices, key) {
  if (!prices || !hasKey(prices, key)) return null;
  const raw = prices[key];
  if (raw === '' || raw === null || raw === undefined) return null;
  const minor = Number(prices.currency_minor_unit ?? 2);
  const n = Number(raw);
  return Number.isFinite(n) ? n / 10 ** minor : null;
}
const UNCATEGORISED = new Set(['uncategorized', 'uncategorised']);

export function normaliseWoo(rawProducts, rawVariations, origin) {
  const vis = { barcode: false, weight: false, requiresShipping: false, variantImages: false };
  const byParent = new Map();
  for (const v of rawVariations || []) {
    if (!byParent.has(v.parent)) byParent.set(v.parent, []);
    byParent.get(v.parent).push(v);
  }
  const variableWithoutData = [];
  const toVariant = (item, parent) => {
    const g = wooGtin(item);
    if (g.visible) vis.barcode = true;
    if (hasKey(item, 'weight')) vis.weight = true;
    let title = '';
    if (parent) {
      const meta = (parent.variations || []).find((x) => x.id === item.id);
      title = meta ? (meta.attributes || []).map((a) => a.value).filter(Boolean).join(' / ') : '';
      if (!title) title = String(item.name || '').replace(String(parent.name || ''), '').replace(/^\s*[-–]\s*/, '').trim();
    }
    const regular = wooPrice(item.prices, 'regular_price');
    const price = wooPrice(item.prices, 'price');
    return {
      id: item.id,
      title,
      url: item.permalink || (parent && parent.permalink) || origin,
      sku: String(item.sku ?? '').trim(),
      barcode: g.visible ? g.value : undefined,
      price,
      priceRaw: item.prices?.price,
      compareAt: item.on_sale && regular ? regular : null,
      requiresShipping: !(item.is_virtual === true || item.virtual === true),
      weight: hasKey(item, 'weight') ? (num(item.weight) ?? 0) : undefined,
      hasOwnImage: undefined,
      skuNotVisible: false,
    };
  };
  const products = rawProducts.map((p) => {
    let variants;
    if (p.type === 'variable') {
      const vs = byParent.get(p.id);
      if (vs && vs.length) variants = vs.map((v) => toVariant(v, p));
      else {
        variableWithoutData.push(p.id);
        // The parent SKU is optional on variable products, so its absence proves nothing. Price is still checked.
        variants = [{ ...toVariant(p, null), skuNotVisible: true, barcode: undefined }];
      }
    } else {
      variants = [toVariant(p, null)];
    }
    const cats = (p.categories || []).map((c) => String(c.name || '').trim()).filter((n) => n && !UNCATEGORISED.has(n.toLowerCase()));
    return {
      id: p.id,
      title: stripHtml(p.name),
      url: p.permalink || origin,
      types: cats,
      description: stripHtml(`${p.description || ''} ${p.short_description || ''}`),
      imageCount: Array.isArray(p.images) ? p.images.length : 0,
      variants,
    };
  });
  return { products, visibility: vis, typeWord: 'category', variableWithoutData };
}

// ---------- type clash helpers ----------
export function typeKey(t) {
  let s = String(t).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '');
  if (s.endsWith('ies') && s.length > 4) s = s.slice(0, -3) + 'y';
  else if (/(sses|xes|ches|shes|zes)$/.test(s)) s = s.slice(0, -2);
  else if (s.endsWith('s') && !s.endsWith('ss') && s.length > 3) s = s.slice(0, -1);
  return s;
}

// ---------- the checks ----------
export function runChecks(norm, { noteThreshold = 0.9, noteMinItems = 10 } = {}) {
  const { products, visibility, typeWord } = norm;
  const issues = [];
  const notes = [];
  const notVisible = [];
  const add = (type, product, variant, detail, fix) => issues.push({
    type,
    severity: ISSUE_TYPES[type].severity,
    productTitle: product.title || '(untitled)',
    productUrl: variant?.url && product.variants.length > 1 ? variant.url : product.url,
    variantTitle: variant?.title || '',
    sku: variant?.sku || '',
    detail,
    fix: fix || ISSUE_TYPES[type].fix,
  });
  const pct = (a, b) => Math.round((a / b) * 100);
  // A field empty on almost every item is reported once as a store-wide note, not as hundreds of errors.
  const deliberate = (type, flagged, eligible, unit, what) => {
    if (eligible >= noteMinItems && flagged.length / eligible > noteThreshold) {
      notes.push({
        type,
        text: `${what} is empty on ${pct(flagged.length, eligible)}% of ${unit} (${flagged.length.toLocaleString('en-GB')} of ${eligible.toLocaleString('en-GB')}). A field that is empty almost everywhere usually reflects a deliberate setup rather than a mistake, so we have not listed each one. If you need it (for example, for a Google Shopping feed), we can fill it in.`,
      });
      return true;
    }
    return false;
  };

  const allVariants = products.flatMap((p) => p.variants.map((v) => ({ p, v })));

  // Shared SKUs
  const skuMap = new Map();
  for (const { p, v } of allVariants) {
    if (!v.sku || v.skuNotVisible) continue;
    if (!skuMap.has(v.sku)) skuMap.set(v.sku, []);
    skuMap.get(v.sku).push({ p, v });
  }
  for (const [sku, list] of skuMap) {
    if (list.length < 2) continue;
    for (const item of list) {
      const others = list.filter((x) => x !== item).map((x) => x.p.title + (x.v.title ? ` (${x.v.title})` : ''));
      add('shared_sku', item.p, item.v, `SKU “${sku}” is also used on: ${others.slice(0, 5).join('; ')}${others.length > 5 ? ` and ${others.length - 5} more` : ''}.`);
    }
  }

  // Missing SKUs
  {
    const eligible = allVariants.filter(({ v }) => !v.skuNotVisible);
    const flagged = eligible.filter(({ v }) => !v.sku);
    if (!deliberate('missing_sku', flagged, eligible.length, 'variants', 'The SKU')) {
      for (const { p, v } of flagged) add('missing_sku', p, v, 'This variant has no SKU.');
    }
  }

  // Missing barcodes
  if (!visibility.barcode) {
    notVisible.push({ type: 'missing_barcode', text: 'Barcodes (GTINs) are not published in this store’s public catalogue, so we could not check them. We can check them with read-only access, or from a product export.' });
  } else {
    const eligible = allVariants.filter(({ v }) => v.barcode !== undefined);
    const flagged = eligible.filter(({ v }) => !v.barcode);
    if (!deliberate('missing_barcode', flagged, eligible.length, 'variants', 'The barcode (GTIN)')) {
      for (const { p, v } of flagged) add('missing_barcode', p, v, 'This variant has no barcode (GTIN).');
    }
  }

  // Missing images
  {
    const flagged = products.filter((p) => p.imageCount === 0);
    if (!deliberate('missing_image', flagged, products.length, 'products', 'The product image')) {
      for (const p of flagged) add('missing_image', p, null, 'This product has no images.');
    }
  }
  if (visibility.variantImages) {
    const eligible = [];
    for (const p of products) {
      if (p.variants.length < 2 || p.imageCount === 0) continue;
      if (!p.variants.some((v) => v.hasOwnImage)) continue;
      for (const v of p.variants) eligible.push({ p, v });
    }
    const flagged = eligible.filter(({ v }) => !v.hasOwnImage);
    if (!deliberate('variant_image', flagged, eligible.length, 'variants on products that use variant images', 'The variant image')) {
      for (const { p, v } of flagged) add('variant_image', p, v, 'Other variants of this product have their own image; this one does not.');
    }
  } else {
    notVisible.push({ type: 'variant_image', text: 'Which image belongs to which variant is not published reliably by this platform’s public catalogue, so variant images were not checked.' });
  }

  // Shipped products with no weight
  if (!visibility.weight) {
    notVisible.push({ type: 'missing_weight', text: 'Product weights are not published in this store’s public catalogue, so we could not check for shipped products with no weight. We can check this with read-only access, or from a product export.' });
  } else {
    const eligible = allVariants.filter(({ v }) => v.requiresShipping !== false && v.weight !== undefined);
    const flagged = eligible.filter(({ v }) => !(v.weight > 0));
    if (!deliberate('missing_weight', flagged, eligible.length, 'shipped variants', 'The weight')) {
      for (const { p, v } of flagged) add('missing_weight', p, v, 'This item is marked as shipped, but its weight is 0.');
    }
  }

  // Missing product type / category
  {
    const flagged = products.filter((p) => p.types.length === 0);
    const What = typeWord === 'category' ? 'The category' : 'The product type';
    if (!deliberate('missing_type', flagged, products.length, 'products', What)) {
      for (const p of flagged) add('missing_type', p, null, typeWord === 'category' ? 'This product has no category (or only “Uncategorised”).' : 'This product has no product type.',
        typeWord === 'category' ? 'Assign a category that matches your existing ones.' : undefined);
    }
  }

  // Clashing product types / categories
  {
    const groups = new Map(); // key -> Map(spelling -> [products])
    for (const p of products) {
      for (const t of new Set(p.types)) {
        const k = typeKey(t);
        if (!k) continue;
        if (!groups.has(k)) groups.set(k, new Map());
        const g = groups.get(k);
        if (!g.has(t)) g.set(t, []);
        g.get(t).push(p);
      }
    }
    for (const g of groups.values()) {
      if (g.size < 2) continue;
      // The most-used spelling wins; ties go to the spelling seen first.
      const spellings = [...g.entries()].sort((a, b) => b[1].length - a[1].length);
      const [main, mainList] = spellings[0];
      const all = spellings.map(([s, l]) => `“${s}” (${l.length})`).join(', ');
      for (const [spelling, list] of spellings.slice(1)) {
        for (const p of list) {
          add('clashing_type', p, null,
            `${typeWord === 'category' ? 'Category' : 'Product type'} “${spelling}” clashes with ${all}.`,
            `Change “${spelling}” to “${main}”, the spelling used on ${mainList.length} product${mainList.length === 1 ? '' : 's'}.`);
        }
      }
    }
  }

  // No description
  {
    const flagged = products.filter((p) => !p.description);
    if (!deliberate('no_description', flagged, products.length, 'products', 'The product description')) {
      for (const p of flagged) add('no_description', p, null, 'This product has no description.');
    }
  }

  // Duplicate titles
  {
    const m = new Map();
    for (const p of products) {
      const k = p.title.toLowerCase().replace(/\s+/g, ' ').trim();
      if (!k) continue;
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(p);
    }
    for (const list of m.values()) {
      if (list.length < 2) continue;
      for (const p of list) add('duplicate_title', p, null, `${list.length} products share this title.`);
    }
  }

  // Zero or blank price
  for (const { p, v } of allVariants) {
    if (v.price === null || v.price === 0) {
      add('zero_price', p, v, v.price === 0 ? 'The price is 0.' : 'The price is blank.');
    }
  }

  // Compare-at ("was") price below the selling price
  for (const { p, v } of allVariants) {
    if (v.compareAt && v.compareAt > 0 && v.price !== null && v.compareAt < v.price) {
      add('compare_below_price', p, v, `“Was” price ${v.compareAt.toFixed(2)} is lower than the price ${v.price.toFixed(2)}.`);
    }
  }

  if (norm.variableWithoutData && norm.variableWithoutData.length) {
    notVisible.push({ type: 'missing_sku', text: `Variation-level SKUs are not published for ${norm.variableWithoutData.length} variable product${norm.variableWithoutData.length === 1 ? '' : 's'}, so their variations were not checked for SKUs.` });
  }

  const counts = Object.fromEntries(ISSUE_ORDER.map((t) => [t, 0]));
  for (const i of issues) counts[i.type]++;
  issues.sort((a, b) => ISSUE_ORDER.indexOf(a.type) - ISSUE_ORDER.indexOf(b.type));

  return {
    productsChecked: products.length,
    variantsChecked: allVariants.length,
    issues,
    counts,
    notes,
    notVisible,
    typeWord,
  };
}

export function analyse(catalogue, opts) {
  const norm = catalogue.platform === 'shopify'
    ? normaliseShopify(catalogue.products, catalogue.origin)
    : normaliseWoo(catalogue.products, catalogue.variations, catalogue.origin);
  return { platform: catalogue.platform, origin: catalogue.origin, ...runChecks(norm, opts) };
}

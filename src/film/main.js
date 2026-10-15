/* The scene: one transparent 3D layer behind every page, drawn in the page's own colours.
   Each [data-form] element in the layout is a slot: the records gather into that slot's formation while it
   is in view, then fly to the next slot as you scroll. A single gradient line runs down the page from slot to
   slot, through the margins and behind the content: one direct line, one continuous take.
   The numbers are real: 4,000 records (records validated) and 180 errors (errors intercepted), from the
   launch quality-control case study. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Vector3, BoxGeometry, InstancedBufferGeometry,
  InstancedBufferAttribute, ShaderMaterial, Mesh, BufferGeometry, BufferAttribute, Points, PlaneGeometry,
  DoubleSide, Group, SphereGeometry, ColorManagement, LinearSRGBColorSpace, CatmullRomCurve3, NormalBlending,
} from "three";
import { LAND } from "./land.js";

ColorManagement.enabled = false;

const RECORDS = 4000, ERRORS = 180, LANES = 8, COLS = RECORDS / LANES, SPACING = 0.15;
const RINGS = [[1.5, 0.2], [1.68, -0.42], [1.86, 0.62], [2.05, -0.1], [2.26, 0.38]];
const FORM = { orbit: 0, line: 1, gate: 2, a: 3, b: 4 };
const MAX_SLOTS = 8, SEG = 360;
const root = document.documentElement, body = document.body;
const canvas = document.getElementById("scene");
const params = new URLSearchParams(location.search);
const still = params.has("still") ? parseFloat(params.get("still")) || 0 : null;
const posterMode = params.has("poster");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const PAL = {
  slate: new Color(0x93a0b4), ink: new Color(0x0b1220), navy: new Color(0x1c2a4a),
  aqua: new Color(0x12b5a0), cobalt: new Color(0x2d4fe0), amber: new Color(0xf59e0b), pearl: new Color(0xdfe6f2),
};

let renderer = null;
if (canvas) {
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: "high-performance", preserveDrawingBuffer: still !== null });
    if (!renderer.capabilities.isWebGL2) { renderer.dispose(); renderer = null; }
  } catch (e) { renderer = null; }
}
const slotEls = Array.from(document.querySelectorAll("[data-form]")).slice(0, MAX_SLOTS);
if (!renderer || !slotEls.length) { root.classList.add("scene-off"); if (renderer) renderer.dispose(); }
else start();

function start() {
renderer.outputColorSpace = LinearSRGBColorSpace;
renderer.setClearColor(0x000000, 0);
const scene = new Scene();
const FOV = 24, CAMZ = 40;
const camera = new PerspectiveCamera(FOV, 1, 1, 400);
camera.position.set(0, 0, CAMZ);

let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

const QUAT = /* glsl */`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`;

// ---------- the slots ----------
const statSpec = (body.dataset.statA || "stacks:1,2,3,4").split(":");
const slots = slotEls.map((el) => ({ el, form: FORM[el.dataset.form] ?? 0, pos: new Vector3(), s: 1, q: [0, 0, 0, 1], cy: 0 }));

// ---------- records ----------
const base = new BoxGeometry(0.1, 0.064, 0.01);
const g = new InstancedBufferGeometry();
g.index = base.index;
g.setAttribute("position", base.getAttribute("position"));
g.setAttribute("normal", base.getAttribute("normal"));
g.setAttribute("uv", base.getAttribute("uv"));
g.instanceCount = RECORDS;
const aSeed = new Float32Array(RECORDS * 4), aOrbit = new Float32Array(RECORDS * 3), aLine = new Float32Array(RECORDS * 2);
const aErr = new Float32Array(RECORDS), aStatA = new Float32Array(RECORDS * 4), aStatB = new Float32Array(RECORDS * 4);
const errAt = new Set();
for (let k = 0; k < ERRORS; k++) errAt.add(Math.floor((k + 0.5) * RECORDS / ERRORS));
let errIndex = 0;
for (let i = 0; i < RECORDS; i++) {
  aSeed.set([rnd(), rnd(), rnd(), rnd()], i * 4);
  const ring = Math.floor(rnd() * RINGS.length);
  aOrbit.set([RINGS[ring][0] + (rnd() - 0.5) * 0.08, RINGS[ring][1], rnd() * Math.PI * 2], i * 3);
  aLine.set([i % LANES, Math.floor(i / LANES)], i * 2);
  aErr[i] = errAt.has(i) ? ++errIndex : 0;
}
const extA = layoutStatic(aStatA, statSpec, false);
const extB = layoutStatic(aStatB, ["mark"], true);
g.setAttribute("aSeed", new InstancedBufferAttribute(aSeed, 4));
g.setAttribute("aOrbit", new InstancedBufferAttribute(aOrbit, 3));
g.setAttribute("aLine", new InstancedBufferAttribute(aLine, 2));
g.setAttribute("aErr", new InstancedBufferAttribute(aErr, 1));
g.setAttribute("aStatA", new InstancedBufferAttribute(aStatA, 4));
g.setAttribute("aStatB", new InstancedBufferAttribute(aStatB, 4));

const vec4s = (n) => Array.from({ length: n }, () => [0, 0, 0, 1]).flat();
const recMat = new ShaderMaterial({
  uniforms: {
    uTime: { value: 0 }, uStage: { value: 0 }, uCount: { value: slots.length }, uIntro: { value: 0 },
    uForm: { value: slots.map((s) => s.form).concat(Array(MAX_SLOTS).fill(0)).slice(0, MAX_SLOTS) },
    uAnchor: { value: new Float32Array(MAX_SLOTS * 4) }, uAnchorQ: { value: new Float32Array(vec4s(MAX_SLOTS)) },
    uErrMode: { value: (statSpec[0] === "stacks" && statSpec[1] === "1,1,1,1,1") || statSpec[0] === "bins" ? 0 : 1 },
    uRes: { value: [1, 1] }, uPath: { value: new Float32Array(64 * 3) }, uWpp: { value: 0.01 },
    uSlate: { value: PAL.slate }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt }, uAmber: { value: PAL.amber },
  },
  vertexShader: /* glsl */`
    precision highp float;
    #define PI 3.14159265
    attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
    uniform float uTime, uStage, uCount, uIntro, uErrMode, uForm[${MAX_SLOTS}];
    uniform vec4 uAnchor[${MAX_SLOTS}], uAnchorQ[${MAX_SLOTS}];
    uniform vec3 uPath[64]; uniform float uWpp;
    varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
    ${QUAT}
    const float LANES = ${LANES}.0, COLS = ${COLS}.0, SP = ${SPACING}, HALF = 4.3;
    bool isErr(){ return aErr > .5 && uErrMode > .5; }
    vec4 tumble(float speed){ return qAxis(aSeed.yzw - .5 + .001, uTime * speed * (.3 + aSeed.x) + aSeed.w * 6.283); }

    // the conveyor: a short visible stretch of one long line; records outside it are not drawn
    void flow(bool sorted, out vec3 p, out vec4 q, out float s, out vec2 st){
      float run = COLS * SP;
      float x = mod(aLine.y * SP + uTime * .3, run) - run * .5;
      float z = (aLine.x - (LANES - 1.) * .5) * .11;
      vec3 mess = vec3(0., (aSeed.y - .5) * .05, (aSeed.z - .5) * .06);
      vec4 face = qAxis(vec3(0., 1., 0.), -PI * .5);
      vec4 wobble = qAxis(vec3(aSeed.z - .5, aSeed.w - .5, aSeed.y - .5) + .001, (aSeed.x - .5) * .7);
      float vis = 1. - smoothstep(HALF - .8, HALF, abs(x));
      p = vec3(x, 0., z); q = qMul(face, wobble); s = vis; st = vec2(0.);
      if (!sorted) { p += mess; return; }
      float k = smoothstep(0., .9, x);
      p += mess * (1. - k);
      q = normalize(mix(q, face, k));
      st.x = k;
      if (isErr()) {
        float hit = smoothstep(-.02, .12, x);
        float ek = smoothstep(0., 1.6, x);
        float idx = aErr - 1.;
        vec3 slot = vec3(.75 + mod(idx, 12.) * .118, .1 + floor(idx / 12.) * .078, -1.05);
        p = mix(p, slot, ek) + vec3(0., sin(PI * ek) * .55, 0.);
        q = normalize(mix(q, vec4(0., 0., 0., 1.), ek));
        st = vec2(0., hit);
        s = (x < 0. ? vis : 1.) * (1. - smoothstep(run * .5 - 3., run * .5 - .5, x));
      }
    }

    void form(float id, out vec3 p, out vec4 q, out float s, out vec2 st){
      st = vec2(0.);
      if (id < .5) {
        float r = aOrbit.x, ang = aOrbit.z + uTime * .07 * pow(1.6 / r, 1.5);
        vec3 o = vec3(cos(ang) * r, (aSeed.y - .5) * .05, sin(ang) * r);
        vec4 tilt = qMul(qAxis(vec3(0., 0., 1.), aOrbit.y), qAxis(vec3(1., 0., 0.), aOrbit.y * .6 + .25));
        vec4 along = qAxis(vec3(0., 1., 0.), -ang + PI * .5);
        p = qRot(tilt, o);
        q = qMul(tilt, qMul(along, qAxis(vec3(aSeed.y - .5, aSeed.z - .5, aSeed.w - .5) + .001, (aSeed.x - .5) * .5)));
        s = .5;
      } else if (id < 1.5) { flow(false, p, q, s, st); }
      else if (id < 2.5) { flow(true, p, q, s, st); }
      else {
        vec4 v = id < 3.5 ? aStatA : aStatB;
        p = v.xyz; s = v.w < -.5 ? 0. : 1.;
        q = id < 3.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
        if (v.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
        st.x = 1.;
        if (id < 3.5 && isErr()) st = vec2(0., 1.);
      }
    }

    void place(float i, out vec3 w, out vec4 q, out float s, out vec2 st){
      int k = int(i);
      vec3 p; vec4 lq;
      form(uForm[k], p, lq, s, st);
      vec4 A = uAnchor[k], Q = uAnchorQ[k];
      w = A.xyz + qRot(Q, p * A.w); q = qMul(Q, lq); s *= A.w;
    }

    void main(){
      float stg = clamp(uStage, 0., uCount - 1.);
      float i = floor(stg), f = stg - i;
      vec3 wA, wB; vec4 qA, qB; float sA, sB; vec2 tA, tB;
      place(i, wA, qA, sA, tA);
      vec3 w = wA; vec4 q = qA; float s = sA; vec2 st = tA;
      float e = smoothstep(0., 1., clamp(f * 1.6 - aSeed.x * .6, 0., 1.));
      if (e > 0.) {
        float j = min(i + 1., uCount - 1.);
        place(j, wB, qB, sB, tB);
        if (dot(qA, qB) < 0.) qB = -qB;
        // in transit, the records ride the line: a stream of tiles flowing down it to the next scene
        float tr = fract(aSeed.x * 1.7 + aSeed.z * .3 + uTime * .035) * 62.999;
        int pk = int(tr);
        vec3 pp = mix(uPath[pk], uPath[pk + 1], fract(tr));
        vec3 pd = normalize(uPath[pk + 1] - uPath[pk] + vec3(0., -1e-4, 0.));
        vec3 pn = vec3(-pd.y, pd.x, 0.);
        pp += pn * (aSeed.z - .5) * 18. * uWpp + vec3(0., 0., 1.5 + (aSeed.w - .5) * .6);
        float k1 = smoothstep(0., .3, e), k2 = smoothstep(.7, 1., e);
        vec4 qp = qAxis(vec3(0., 0., 1.), atan(pd.y, pd.x));
        if (dot(qA, qp) < 0.) qp = -qp;
        if (aSeed.y > .88) {
          // a rider: leaves its formation, travels the line, joins the next one
          w = mix(mix(wA, pp, k1), wB, k2);
          q = normalize(mix(mix(qA, qp, k1), qB, k2));
          s = mix(mix(sA, 80. * uWpp, k1), sB, k2); st = mix(mix(tA, vec2(.6, 0.), k1), tB, k2);
        } else {
          // the rest dissolve in place and re-form at the destination
          bool there = e > .5;
          w = there ? wB : wA; q = there ? qB : qA; st = there ? tB : tA;
          s = there ? sB * smoothstep(.75, 1., e) : sA * (1. - smoothstep(0., .25, e));
        }
      }
      // arrival: the formation unfolds from its own centre once, when the page opens
      float ia = smoothstep(0., 1., clamp(uIntro * 1.6 - aSeed.x * .6, 0., 1.));
      vec4 A0 = uAnchor[int(i)];
      w = mix(A0.xyz + (w - A0.xyz) * .15, w, ia); s *= ia;
      vec3 world = qRot(q, position * s) + w;
      vec4 mv = viewMatrix * vec4(world, 1.);
      vN = normalize(mat3(viewMatrix) * qRot(q, normal));
      vUv = uv; vState = st; vView = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }`,
  fragmentShader: /* glsl */`
    precision highp float;
    uniform vec2 uRes; uniform vec3 uSlate, uAqua, uCobalt, uAmber;
    varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
    void main(){
      vec3 n = normalize(vN);
      vec3 grad = mix(uAqua, uCobalt, clamp(gl_FragCoord.x / uRes.x * 1.15 - .08, 0., 1.));
      float lam = max(dot(n, normalize(vec3(-.35, .75, .6))), 0.);
      float rim = pow(1. - abs(dot(n, vView)), 2.5);
      float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
      float edge = 1. - smoothstep(.0, .085, e);
      vec3 fill = mix(vec3(.8 + .2 * lam), vec3(.86, .9, .96), .35);
      fill = mix(fill, mix(vec3(1.), grad, .2) * (.88 + .12 * lam), vState.x);
      fill = mix(fill, mix(vec3(1.), uAmber, .5) * (.9 + .1 * lam), vState.y);
      vec3 ec = mix(uSlate * .72, grad, vState.x);
      ec = mix(ec, uAmber * .92, vState.y);
      vec3 col = mix(fill, ec, edge * .92);
      col = mix(col, grad, rim * .12);
      gl_FragColor = vec4(col, 1.);
    }`,
});
const records = new Mesh(g, recMat);
records.frustumCulled = false;
scene.add(records);

// Static formations, laid out once and centred: stacks, bins, the mark, the broken line.
function layoutStatic(out, spec, isMark) {
  const type = spec[0];
  const valid = [], errs = [];
  const quarantine = type === "stacks" && spec[1] !== "1,1,1,1,1";
  for (let i = 0; i < RECORDS; i++) (aErr[i] > 0 && quarantine ? errs : valid).push(i);
  const put = (i, x, y, z, w = 0) => out.set([x, y, z, w], i * 4);
  if (!isMark && (type === "stacks" || type === "bins")) {
    const cols = (spec[1] || "1,2,3,4").split(",").map(Number), total = cols.reduce((a, b) => a + b, 0);
    const gap = type === "bins" ? 0.5 : (cols.length > 4 ? 0.6 : 0.62);
    const fx = 4, fz = 6, layer = fx * fz, dy = 0.024;
    let k = 0;
    cols.forEach((h, ci) => {
      const n = ci === cols.length - 1 ? valid.length - k : Math.round(valid.length * h / total);
      const cx = (ci - (cols.length - 1) / 2) * gap;
      for (let j = 0; j < n && k < valid.length; j++, k++) {
        const l = Math.floor(j / layer), m = j % layer;
        put(valid[k], cx + (m % fx - (fx - 1) / 2) * 0.104, l * dy, (Math.floor(m / fx) - (fz - 1) / 2) * 0.068);
      }
    });
    errs.forEach((i, j) => {
      const l = Math.floor(j / 12), m = j % 12;
      put(i, cols.length * gap * 0.5 + 0.55 + (m % 3) * 0.104, l * dy, -0.9 + Math.floor(m / 3) * 0.068);
    });
  } else if (isMark) {
    const R = 1.25, t = 0.34, dotR = 0.3, pts = [], a0 = 25 * Math.PI / 180;
    for (let y = -1.7; y <= 1.7; y += 0.072) for (let x = -1.7; x <= 1.7; x += 0.108) {
      const r = Math.hypot(x, y); let ang = Math.atan2(-y, x) - a0; ang = (ang + Math.PI * 4) % (Math.PI * 2);
      if ((Math.abs(r - R) < t / 2 && ang < Math.PI * 2 * 0.752) || Math.hypot(x - R * 0.927, y - R * 0.345) < dotR) pts.push([x, y]);
    }
    const all = valid.concat(errs), layers = Math.ceil(all.length / pts.length);
    all.forEach((i, j) => { const p = pts[j % pts.length], l = Math.floor(j / pts.length); put(i, p[0], p[1], (l - (layers - 1) / 2) * 0.03); });
  } else if (type === "broken") {
    valid.concat(errs).forEach((i, j) => {
      const lane = j % LANES, col = Math.floor(j / LANES), x = -9 + col * 0.12;
      if (x > -4.4 && x < 4.4) {
        if (x > 0 && x < 1.1) put(i, x + (rnd() - 0.5) * 0.4, -0.5 - rnd() * 2.4, (lane - 3.5) * 0.11 + (rnd() - 0.5) * 0.5, 1);
        else put(i, x, 0, (lane - 3.5) * 0.11);
      } else put(i, 0, -50, 0, -1);
    });
  }
  // centre the layout on its own bounds, and report its size for scaling into a slot
  let mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
  for (let i = 0; i < RECORDS; i++) { if (out[i * 4 + 3] < -0.5) continue; const x = out[i * 4], y = out[i * 4 + 1]; mnx = Math.min(mnx, x); mxx = Math.max(mxx, x); mny = Math.min(mny, y); mxy = Math.max(mxy, y); }
  const cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  for (let i = 0; i < RECORDS; i++) { if (out[i * 4 + 3] < -0.5) continue; out[i * 4] -= cx; out[i * 4 + 1] -= cy; }
  return { w: mxx - mnx, h: mxy - mny };
}

// ---------- the globe: a pearl sphere with the world's coastlines ----------
const globe = new Group();
{
  const raw = Uint8Array.from(atob(LAND), (c) => c.charCodeAt(0));
  const ll = new Int16Array(raw.buffer);
  const n = ll.length / 2;
  const pos = new Float32Array(n * 3), rand = new Float32Array(n);
  const toXYZ = (lat, lon, r = 1) => { const la = lat * Math.PI / 180, lo = lon * Math.PI / 180; return [r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo)]; };
  for (let i = 0; i < n; i++) { pos.set(toXYZ(ll[i * 2] / 32767 * 90, ll[i * 2 + 1] / 32767 * 180, 1.006), i * 3); rand[i] = rnd(); }
  const lg = new BufferGeometry();
  lg.setAttribute("position", new BufferAttribute(pos, 3));
  lg.setAttribute("aRand", new BufferAttribute(rand, 1));
  globe.userData.land = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uPx: { value: 1 }, uInk: { value: PAL.navy }, uCobalt: { value: PAL.cobalt } },
    vertexShader: `attribute float aRand; uniform float uPx; varying float vR;
      void main(){ vR = aRand; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.85 + aRand * .35); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uInk, uCobalt; varying float vR;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard;
      gl_FragColor = vec4(mix(uInk, uCobalt, step(.94, vR) * .8), smoothstep(.5, .3, r) * .78); }`,
  });
  globe.add(new Points(lg, globe.userData.land));
  const sphere = new Mesh(new SphereGeometry(1, 96, 64), new ShaderMaterial({
    uniforms: { uPearl: { value: PAL.pearl }, uCobalt: { value: PAL.cobalt }, uAqua: { value: PAL.aqua } },
    vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uPearl, uCobalt, uAqua; varying vec3 vN; varying vec3 vV;
      void main(){ float l = max(dot(vN, normalize(vec3(-.4, .6, .7))), 0.);
      float fr = pow(1. - max(dot(vN, vV), 0.), 2.2);
      vec3 c = mix(uPearl * .94, vec3(1.), l * .9);
      c = mix(c, mix(uAqua, uCobalt, .5 + vN.y * .5), fr * .55);
      gl_FragColor = vec4(c, 1.); }`,
  }));
  globe.add(sphere);
  // routes out of the UK, travelling dots
  const LDN = [51.5, -0.12];
  const MK = [[40.7, -74], [1.35, 103.8], [35.7, 139.7], [-23.5, -46.6], [25.2, 55.3], [-33.9, 151.2], [19.1, 72.9], [43.65, -79.4], [-26.2, 28], [31.2, 121.5], [34.05, -118.2], [59.3, 18.1]];
  const apos = [], au = [], aid = [], vL = new Vector3(...toXYZ(...LDN));
  MK.forEach((m, ri) => {
    const vM = new Vector3(...toXYZ(m[0], m[1])), ang = vL.angleTo(vM);
    for (let k = 0; k <= 90; k++) {
      const t = k / 90;
      const v = vL.clone().multiplyScalar(Math.sin((1 - t) * ang) / Math.sin(ang)).add(vM.clone().multiplyScalar(Math.sin(t * ang) / Math.sin(ang)));
      v.normalize().multiplyScalar(1.01 + Math.sin(Math.PI * t) * (0.08 + ang * 0.12));
      apos.push(v.x, v.y, v.z); au.push(t); aid.push(ri / MK.length);
    }
  });
  const ag = new BufferGeometry();
  ag.setAttribute("position", new BufferAttribute(new Float32Array(apos), 3));
  ag.setAttribute("aU", new BufferAttribute(new Float32Array(au), 1));
  ag.setAttribute("aId", new BufferAttribute(new Float32Array(aid), 1));
  globe.userData.arcs = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt } },
    vertexShader: `attribute float aU, aId; uniform float uTime, uPx; varying float vA; varying float vU;
      void main(){ float head = fract(uTime * .14 + aId * 1.7); float d = head - aU;
      vA = .18 + smoothstep(.25, 0., d) * step(0., d) * .82; vU = aU;
      vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.7 + vA); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uAqua, uCobalt; varying float vA; varying float vU;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; gl_FragColor = vec4(mix(uAqua, uCobalt, vU), vA); }`,
  });
  globe.add(new Points(ag, globe.userData.arcs));
  const lp = new BufferGeometry(); lp.setAttribute("position", new BufferAttribute(new Float32Array(toXYZ(...LDN, 1.012)), 3));
  globe.userData.home = new ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uAqua: { value: PAL.aqua } },
    vertexShader: `uniform float uTime, uPx; varying float vP; void main(){ vP = fract(uTime * .5); vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (3. + vP * 6.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uAqua; varying float vP; void main(){ float r = length(gl_PointCoord - .5) * 2.; if (r > 1.) discard;
      float core = smoothstep(.36, .2, r); float ring = smoothstep(.06, 0., abs(r - .82)) * (1. - vP);
      gl_FragColor = vec4(uAqua, max(core, ring)); }`,
  });
  globe.add(new Points(lp, globe.userData.home));
}
globe.visible = false;
scene.add(globe);
const globeSlot = slots.find((s) => s.form === 0);

// ---------- the automated check: a scanning gate ----------
const gate = new Mesh(new PlaneGeometry(1.25, 0.62), new ShaderMaterial({
  transparent: true, depthWrite: false, side: DoubleSide,
  uniforms: { uTime: { value: 0 }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
  fragmentShader: `uniform float uTime; uniform vec3 uAqua, uCobalt; varying vec2 vUv;
    void main(){ float scan = smoothstep(.05, 0., abs(vUv.y - fract(uTime * .45)));
    float frame = 1. - smoothstep(0., .02, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
    vec3 c = mix(uAqua, uCobalt, vUv.x);
    gl_FragColor = vec4(c, .07 + scan * .55 + frame * .9); }`,
}));
gate.visible = false;
scene.add(gate);
const gateSlot = slots.find((s) => s.form === 2);

// ---------- soft contact shadows under each formation ----------
const shadowMat = new ShaderMaterial({
  transparent: true, depthWrite: false, uniforms: { uInk: { value: PAL.ink }, uA: { value: 0.11 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
  fragmentShader: `uniform vec3 uInk; uniform float uA; varying vec2 vUv; void main(){ float d = length((vUv - .5) * 2.); gl_FragColor = vec4(uInk, uA * pow(1. - smoothstep(0., 1., d), 1.6)); }`,
});
const shadows = slots.map(() => { const m = new Mesh(new PlaneGeometry(1, 1), shadowMat.clone()); m.renderOrder = -2; scene.add(m); return m; });

// ---------- the line ----------
const rib = new BufferGeometry();
const rPos = new Float32Array(SEG * 2 * 3), rU = new Float32Array(SEG * 2), rSide = new Float32Array(SEG * 2), idx = [];
for (let i = 0; i < SEG; i++) { rU[i * 2] = rU[i * 2 + 1] = i / (SEG - 1); rSide[i * 2] = -1; rSide[i * 2 + 1] = 1; if (i < SEG - 1) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
rib.setIndex(idx);
rib.setAttribute("position", new BufferAttribute(rPos, 3));
rib.setAttribute("aU", new BufferAttribute(rU, 1));
rib.setAttribute("aSide", new BufferAttribute(rSide, 1));
const ribMat = new ShaderMaterial({
  transparent: true, depthWrite: false, side: DoubleSide, blending: NormalBlending,
  uniforms: { uTime: { value: 0 }, uHead: { value: 0 }, uLen: { value: 1 }, uAlpha: { value: 1 }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt } },
  vertexShader: `attribute float aU, aSide; varying float vU; varying float vSide; varying float vY;
    void main(){ vU = aU; vSide = aSide; vec4 c = projectionMatrix * modelViewMatrix * vec4(position,1.); vY = c.y / c.w; gl_Position = c; }`,
  fragmentShader: `uniform float uTime, uHead, uLen, uAlpha; uniform vec3 uAqua, uCobalt; varying float vU; varying float vSide; varying float vY;
    void main(){ float drawn = smoothstep(uHead - .08, uHead + .01, vY);
    float soft = 1. - smoothstep(.35, 1., abs(vSide));
    float px = vU * uLen;
    float pf = fract(px / 1400. - uTime * .22); float pulse = smoothstep(.93, .985, pf) * (1. - smoothstep(.985, 1., pf));
    vec3 c = mix(uAqua, uCobalt, vU);
    c = mix(c, vec3(1.), pulse * .7);
    gl_FragColor = vec4(c, soft * drawn * (.85 + pulse * .15) * uAlpha); }`,
});
const ribbon = new Mesh(rib, ribMat);
ribbon.frustumCulled = false; ribbon.renderOrder = -1;
ribbon.visible = !posterMode;
scene.add(ribbon);
const curve = new CatmullRomCurve3([new Vector3(), new Vector3(1, 0, 0)], false, "centripetal");

// ---------- layout to world ----------
let W = 1, H = 1, wpp = 1, dpr = 1;
const qAxis = (ax, a) => { const s = Math.sin(a / 2); const l = Math.hypot(...ax); return [ax[0] / l * s, ax[1] / l * s, ax[2] / l * s, Math.cos(a / 2)]; };
const qMul = (a, b) => [a[3] * b[0] + b[3] * a[0] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] + b[3] * a[1] + a[2] * b[0] - a[0] * b[2], a[3] * b[2] + b[3] * a[2] + a[0] * b[1] - a[1] * b[0], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
const qRot = (q, v) => { const [x, y, z, w] = q; const t = [2 * (y * v[2] - z * v[1]), 2 * (z * v[0] - x * v[2]), 2 * (x * v[1] - y * v[0])]; return [v[0] + w * t[0] + (y * t[2] - z * t[1]), v[1] + w * t[1] + (z * t[0] - x * t[2]), v[2] + w * t[2] + (x * t[1] - y * t[0])]; };
const EXT = { 0: { w: 4.3, h: 4.3 }, 1: { w: 7.2, h: 1.7 }, 2: { w: 7.4, h: 2.4 }, 3: { w: extA.w * 0.92 + 0.3, h: extA.h + 0.7 }, 4: { w: extB.w * 0.96, h: extB.h * 0.96 } };
const BASEQ = { 0: [0, 0, 0, 1], 1: qMul(qAxis([1, 0, 0], 0.42), qAxis([0, 1, 0], -0.62)), 2: qMul(qAxis([1, 0, 0], 0.4), qAxis([0, 1, 0], -0.6)), 3: qMul(qAxis([1, 0, 0], 0.34), qAxis([0, 1, 0], -0.55)), 4: [0, 0, 0, 1] };
const SHADOW = { 0: [0, -1.35, 2.6, 0.5], 1: [0, -0.35, 9, 1.6], 2: [0, -0.35, 9, 1.8], 3: [0, -0.62, 1.15, 0.9], 4: [0, -1.55, 2.4, 0.35] };

function measure() {
  const halfH = Math.tan(FOV * Math.PI / 360) * CAMZ;
  wpp = (2 * halfH) / H;
  slots.forEach((s, i) => {
    const r = s.el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    s.cy = cy;
    s.pos.set((cx - W / 2) * wpp, -(cy - H / 2) * wpp, 0);
    const e = EXT[s.form] || EXT[0];
    s.s = Math.max(0.01, Math.min((r.width * wpp) / e.w, (r.height * wpp) / e.h));
    const sway = reduce ? 0 : (cy / H - 0.5) * -0.35;
    s.q = qMul(qAxis([0, 1, 0], sway * (s.form === 0 ? 0 : 1)), BASEQ[s.form] || BASEQ[0]);
    const A = recMat.uniforms.uAnchor.value, Q = recMat.uniforms.uAnchorQ.value;
    A.set([s.pos.x, s.pos.y, s.pos.z, s.s], i * 4); Q.set(s.q, i * 4);
    const [ox, oy, sw, sh] = SHADOW[s.form] || SHADOW[0];
    const sp = qRot(s.q, [ox, s.form === 3 ? -(extA.h / 2 + 0.25) : oy, 0]);
    shadows[i].position.set(s.pos.x + sp[0] * s.s, s.pos.y + sp[1] * s.s, -2);
    shadows[i].scale.set((s.form === 3 ? extA.w + 0.8 : sw) * s.s, sh * s.s, 1);
  });
}

// the stage: which slot the reading is at, easing to the next one as it arrives
function stageFromScroll() {
  const focus = H * 0.55;
  const c = slots.map((s) => s.cy);
  if (focus <= c[0]) return 0;
  for (let k = 0; k < c.length - 1; k++) {
    if (focus >= c[k] && focus < c[k + 1]) {
      const t = (focus - c[k]) / Math.max(1, c[k + 1] - c[k]);
      const u = Math.min(1, Math.max(0, (t - 0.45) / 0.5));
      return k + u * u * (3 - 2 * u);
    }
  }
  return c.length - 1;
}

// the line: from above the first slot, threading each formation, weaving through the margins between them.
// Only the stretch on screen is tessellated, so it stays smooth on a page of any length.
const DENSE = [], RP = Array.from({ length: SEG }, () => new Vector3()), RU = new Float32Array(SEG);
function buildPath() {
  const pts = [];
  const margin = (W / 2 - Math.max(14, Math.min(48, W * 0.035))) * wpp;
  const first = slots[0];
  const startSide = first.pos.x >= -1e-3 ? 1 : -1;
  let side = -startSide;
  pts.push(new Vector3(startSide * margin, first.pos.y + H * 1.4 * wpp, -3), new Vector3(startSide * margin, first.pos.y + H * 0.45 * wpp, -3));
  slots.forEach((s, i) => {
    const r = s.el.getBoundingClientRect();
    const nx = slots[i + 1];
    const prevX = pts[pts.length - 1].x;
    const nextX = nx ? side * margin : s.pos.x * 0.3;
    const dir = Math.sign(nextX - prevX) || 1;
    const fl = Math.min(r.width * 0.22, W * 0.1) * wpp;
    pts.push(new Vector3(s.pos.x - dir * fl, s.pos.y + fl * 0.12, -3), new Vector3(s.pos.x, s.pos.y, -3), new Vector3(s.pos.x + dir * fl, s.pos.y - fl * 0.12, -3));
    if (!nx) return;
    const n = Math.max(1, Math.round(Math.abs(nx.cy - s.cy) / (H * 0.85)));
    const gap = (s.pos.y - nx.pos.y) / (n + 1);
    for (let k = 1; k <= n; k++) {
      const y = s.pos.y - gap * k;
      pts.push(new Vector3(side * margin, y + gap * 0.16, -3), new Vector3(side * margin, y - gap * 0.16, -3));
      side = -side;
    }
    if (n % 2 === 0) side = -side;
  });
  const last = slots[slots.length - 1];
  pts.push(new Vector3(last.pos.x * 0.3, last.pos.y - H * 0.7 * wpp, -3));
  curve.points = pts;
  const N = pts.length * 48;
  while (DENSE.length <= N) DENSE.push(new Vector3());
  const L = new Float32Array(N + 1);
  for (let i = 0; i <= N; i++) { curve.getPoint(i / N, DENSE[i]); if (i) L[i] = L[i - 1] + DENSE[i].distanceTo(DENSE[i - 1]); }
  const total = L[N] || 1;
  // visible window in world y, with a margin so the ends never show
  const hy = H * 0.5 * wpp * 1.35;
  let i0 = 0, i1 = N;
  while (i0 < N && DENSE[i0].y > hy) i0++;
  i0 = Math.max(0, i0 - 1);
  i1 = i0;
  while (i1 < N && DENSE[i1].y > -hy) i1++;
  i1 = Math.min(N, i1 + 1);
  if (i1 - i0 < 2) { i0 = 0; i1 = 1; }
  const l0 = L[i0], l1 = L[i1];
  const half = 2.1 * wpp * (W < 700 ? 0.8 : 1);
  let j = i0;
  const P = (t, out) => {
    const l = l0 + (l1 - l0) * t;
    while (j < i1 - 1 && L[j + 1] < l) j++;
    const f = (l - L[j]) / Math.max(1e-6, L[j + 1] - L[j]);
    out.lerpVectors(DENSE[j], DENSE[j + 1], Math.min(1, Math.max(0, f)));
    return l / total;
  };
  j = i0;
  for (let i = 0; i < SEG; i++) { RU[i] = P(i / (SEG - 1), RP[i]); }
  for (let i = 0; i < SEG; i++) {
    const pa = RP[Math.max(0, i - 1)], pb = RP[Math.min(SEG - 1, i + 1)], pc = RP[i];
    let tx = pb.x - pa.x, ty = pb.y - pa.y; const len = Math.hypot(tx, ty) || 1; tx /= len; ty /= len;
    const ox = -ty * half, oy = tx * half;
    rPos.set([pc.x - ox, pc.y - oy, pc.z], i * 6);
    rPos.set([pc.x + ox, pc.y + oy, pc.z], i * 6 + 3);
    rU[i * 2] = rU[i * 2 + 1] = RU[i];
  }
  const UP = recMat.uniforms.uPath.value;
  for (let k = 0; k < 64; k++) { const v = RP[Math.round(k / 63 * (SEG - 1))]; UP[k * 3] = v.x; UP[k * 3 + 1] = v.y; UP[k * 3 + 2] = v.z; }
  recMat.uniforms.uWpp.value = wpp;
  ribMat.uniforms.uLen.value = total / wpp;
  rib.attributes.position.needsUpdate = true;
  rib.attributes.aU.needsUpdate = true;
}

function resize() {
  W = innerWidth; H = innerHeight;
  dpr = Math.min(devicePixelRatio || 1, W < 700 ? 1.6 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.setSize(W, H, false);
  camera.aspect = W / H; camera.updateProjectionMatrix();
  recMat.uniforms.uRes.value = [W * dpr, H * dpr];
  ribMat.uniforms.uAlpha.value = W < 700 ? 0.5 : W < 1000 ? 0.75 : 1;
}

let last0 = performance.now();
let shown = 0, intro = still !== null || reduce ? 1 : 0, time = still !== null ? 40 : 0, last = performance.now(), first = true, idle = false, stillFrames = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (still === null && !reduce) time += dt;
  intro = Math.min(1, intro + Math.min(0.25, (now - last0) / 1000) / 1.6); last0 = now;
  measure();
  const target = still !== null ? still : stageFromScroll();
  shown += (target - shown) * (reduce || first || still !== null ? 1 : 1 - Math.exp(-dt * 4.5));
  if (!Number.isFinite(shown)) shown = 0;
  if (Math.abs(target - shown) < 1e-4) shown = target;
  buildPath();

  const u = recMat.uniforms;
  u.uTime.value = time; u.uStage.value = shown; u.uIntro.value = intro * intro * (3 - 2 * intro);
  if (globeSlot) {
    const px = Math.max(1.4, 2.3 * dpr * Math.min(1.2, globeSlot.s / 3));
    globe.visible = true;
    globe.position.copy(globeSlot.pos); globe.scale.setScalar(globeSlot.s);
    globe.rotation.set(0.32, -1.25 + time * 0.035, 0);
    globe.userData.land.uniforms.uPx.value = px; globe.userData.arcs.uniforms.uPx.value = px * 1.2; globe.userData.home.uniforms.uPx.value = px * 1.6;
    globe.userData.arcs.uniforms.uTime.value = time; globe.userData.home.uniforms.uTime.value = time;
  }
  if (gateSlot) {
    gate.visible = true;
    const gp = qRot(gateSlot.q, [0, 0.25, 0]);
    gate.position.set(gateSlot.pos.x + gp[0] * gateSlot.s, gateSlot.pos.y + gp[1] * gateSlot.s, gp[2] * gateSlot.s);
    const q = qMul(gateSlot.q, qAxis([0, 1, 0], Math.PI / 2));
    gate.quaternion.set(q[0], q[1], q[2], q[3]); gate.scale.setScalar(gateSlot.s);
    gate.material.uniforms.uTime.value = time;
  }
  shadows.forEach((m, i) => { m.material.uniforms.uA.value = 0.11 * Math.max(0, 1 - Math.abs(shown - i) * 1.6) * (u.uIntro.value); });
  ribMat.uniforms.uTime.value = time;
  ribMat.uniforms.uHead.value = still !== null ? -1.2 : -0.35;

  renderer.render(scene, camera);
  if (first) { first = false; requestAnimationFrame(() => root.classList.add("scene-on")); }
  if (still !== null && ++stillFrames > 3) { root.classList.add("scene-still"); return; }
  if (document.hidden || (reduce && Math.abs(target - shown) < 1e-4)) { idle = true; return; }
  requestAnimationFrame(frame);
}
function wake() { if (idle) { idle = false; last = performance.now(); requestAnimationFrame(frame); } }
addEventListener("resize", () => { resize(); wake(); });
addEventListener("scroll", wake, { passive: true });
document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); root.classList.add("scene-off"); });
resize();
requestAnimationFrame(frame);
}

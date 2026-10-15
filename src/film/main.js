/* The film: one 3D scene, shown in contained stage panels across the site.
   4,000 records (the launch QA system's validated-record count) orbit a globe drawn from real coastline
   data, line up on a single straight conveyor, pass through an automated check where 180 of them (the
   errors intercepted) turn amber and are set aside, then stack into finished work and finally form the
   Clarke Systems Group mark. Every <canvas data-shot> is its own instance: it sizes to its panel, renders
   only while on screen, and either holds one shot or plays a scroll story ([data-story] with [data-stage] steps). */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Vector3, BoxGeometry, InstancedBufferGeometry,
  InstancedBufferAttribute, ShaderMaterial, Mesh, BufferGeometry, BufferAttribute, Points, PlaneGeometry,
  AdditiveBlending, DoubleSide, WebGLRenderTarget, HalfFloatType, Vector2, Group, SphereGeometry, BackSide,
} from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { LAND } from "./land.js";
import { SHOTS } from "./shots.js";

const RINGS = [[1.5, 0.2], [1.68, -0.42], [1.86, 0.62], [2.05, -0.1], [2.26, 0.38]];
const RECORDS = 4000, ERRORS = 180, LANES = 8, COLS = RECORDS / LANES, SPACING = 0.16;
const root = document.documentElement;
const params = new URLSearchParams(location.search);
const still = params.has("still") ? parseFloat(params.get("still")) || 0 : null; // ?still=2.0 freezes a frame (posters)
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const lowEnd = !params.has("hq") && ((navigator.hardwareConcurrency || 8) <= 2 || (navigator.deviceMemory || 8) <= 2);

for (const canvas of document.querySelectorAll("canvas[data-shot]")) {
  const host = canvas.closest(".stage") || canvas.parentElement;
  let renderer = null;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance", alpha: false, preserveDrawingBuffer: still !== null });
    if (!renderer.capabilities.isWebGL2) { renderer.dispose(); renderer = null; }
  } catch (e) { renderer = null; }
  if (!renderer) { host.classList.add("film-off"); continue; }
  start(canvas, renderer, SHOTS[canvas.dataset.shot] || SHOTS.quiet, host);
}

function start(canvas, renderer, shot, host) {
const fail = () => host.classList.add("film-off");
const small = () => canvas.clientWidth < 700;

renderer.setClearColor(0x000000, 1);
const scene = new Scene();
const camera = new PerspectiveCamera(34, 1, 0.05, 220);

// ---------- palette (sRGB hex, converted to linear by three) ----------
const C = {
  paper: new Color(0xedeff2), line: new Color(0x34e0c2), fault: new Color(0xffb13b),
  reach: new Color(0x7d95ff), steel: new Color(0x5d6875),
};

// ---------- deterministic randomness ----------
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

// ---------- GLSL shared ----------
const QUAT = /* glsl */`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`;

// ---------- the records ----------
function buildRecords() {
  const base = new BoxGeometry(0.1, 0.064, 0.008);
  const g = new InstancedBufferGeometry();
  g.index = base.index;
  g.setAttribute("position", base.getAttribute("position"));
  g.setAttribute("normal", base.getAttribute("normal"));
  g.setAttribute("uv", base.getAttribute("uv"));
  g.instanceCount = RECORDS;

  const aSeed = new Float32Array(RECORDS * 4), aOrbit = new Float32Array(RECORDS * 3), aLine = new Float32Array(RECORDS * 2);
  const aErr = new Float32Array(RECORDS), aStatA = new Float32Array(RECORDS * 4), aStatB = new Float32Array(RECORDS * 4);

  // spread the 180 errors evenly through the flow, so they arrive at the check one by one
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
  g.setAttribute("aSeed", new InstancedBufferAttribute(aSeed, 4));
  g.setAttribute("aOrbit", new InstancedBufferAttribute(aOrbit, 3));
  g.setAttribute("aLine", new InstancedBufferAttribute(aLine, 2));
  g.setAttribute("aErr", new InstancedBufferAttribute(aErr, 1));
  const statA = new InstancedBufferAttribute(aStatA, 4), statB = new InstancedBufferAttribute(aStatB, 4);
  g.setAttribute("aStatA", statA);
  g.setAttribute("aStatB", statB);
  layoutStatic(aStatA, shot.statA, aErr);
  layoutStatic(aStatB, shot.statB, aErr);

  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }, uStage: { value: 0 }, uForm: { value: shot.forms.concat([0, 0, 0, 0, 0]).slice(0, 6) },
      uGlobePos: { value: new Vector3() }, uGlobeScale: { value: 1 }, uGateX: { value: 0 }, uFlow: { value: 0.32 },
      uErrMode: { value: shot.errors === false ? 0 : 1 }, uStatColA: { value: shot.statA?.color ?? 0 }, uStatColB: { value: shot.statB?.color ?? 0 },
      uPaper: { value: C.paper }, uLine: { value: C.line }, uFault: { value: C.fault }, uReach: { value: C.reach },
      uFogNear: { value: 9 }, uFogFar: { value: 30 }, uGlow: { value: 1 },
    },
    vertexShader: /* glsl */`
      precision highp float;
      #define PI 3.14159265
      attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
      uniform float uTime, uStage, uForm[6], uGlobeScale, uGateX, uFlow, uErrMode, uStatColA, uStatColB;
      uniform vec3 uGlobePos, uPaper, uLine, uFault, uReach;
      varying vec3 vN; varying vec2 vUv; varying vec3 vCol; varying float vGlow; varying float vDepth; varying vec3 vView;
      ${QUAT}
      const float LANES = ${LANES}.0, COLS = ${COLS}.0, SP = ${SPACING};
      bool isErr(){ return aErr > .5 && uErrMode > .5; }
      vec4 tumble(float speed){ return qAxis(aSeed.yzw - .5 + .001, uTime * speed * (.3 + aSeed.x) + aSeed.w * 6.283); }

      void flow(bool sorted, out vec3 p, out vec4 q, out float s, out vec3 c, out float g){
        float run = COLS * SP;
        float xr = mod(aLine.y * SP + uTime * uFlow, run);
        float x = xr - run * .62;
        float z = (aLine.x - (LANES - 1.) * .5) * .11;
        vec3 mess = vec3(0., (aSeed.y - .5) * .05, (aSeed.z - .5) * .06);
        vec4 face = qAxis(vec3(0., 1., 0.), -PI * .5);
        vec4 wobble = qAxis(vec3(aSeed.z - .5, aSeed.w - .5, aSeed.y - .5) + .001, (aSeed.x - .5) * .7);
        p = vec3(x, 0., z); q = qMul(face, wobble); s = 1.; c = uPaper; g = .55;
        float fade = 1. - smoothstep(run * .38 - 4., run * .38 - .5, x);
        if (!sorted) { p += mess; s = fade; return; }
        float k = smoothstep(0., .9, x - uGateX);
        p += mess * (1. - k);
        q = normalize(mix(q, face, k));
        if (isErr()) {
          float hit = smoothstep(-.02, .12, x - uGateX);
          float ek = smoothstep(0., 1.6, x - uGateX);
          float idx = aErr - 1.;
          vec3 slot = vec3(uGateX + .75 + mod(idx, 12.) * .118, .02 + floor(idx / 12.) * .078, -1.05);
          vec3 lp = p;
          p = mix(lp, slot, ek) + vec3(0., sin(PI * ek) * .55, 0.);
          q = normalize(mix(q, vec4(0., 0., 0., 1.), ek));
          c = mix(uPaper, uFault, hit); g = mix(.55, 1.25, hit);
          s = 1. - smoothstep(run * .38 - 2.5, run * .38 - .5, x);
        } else {
          c = mix(uPaper, uLine, k); g = mix(.55, 1.05, k); s = fade;
        }
      }

      vec3 statColour(float mode, vec3 at){
        if (mode < .5) return uLine;
        if (mode < 1.5) return mix(uLine, uReach, clamp(at.x * .32 + .5, 0., 1.));
        return uPaper;
      }

      void form(float id, out vec3 p, out vec4 q, out float s, out vec3 c, out float g){
        if (id < .5) {                       // orbit around the globe
          float r = aOrbit.x, ang = aOrbit.z + uTime * .07 * pow(1.6 / r, 1.5);
          vec3 o = vec3(cos(ang) * r, (aSeed.y - .5) * .05, sin(ang) * r);
          vec4 tilt = qMul(qAxis(vec3(0., 0., 1.), aOrbit.y), qAxis(vec3(1., 0., 0.), aOrbit.y * .6 + .25));
          vec4 along = qAxis(vec3(0., 1., 0.), -ang + PI * .5);
          p = uGlobePos + qRot(tilt, o) * uGlobeScale;
          q = qMul(tilt, qMul(along, qAxis(vec3(aSeed.y - .5, aSeed.z - .5, aSeed.w - .5) + .001, (aSeed.x - .5) * .5)));
          s = .42; c = uPaper; g = .6;
        } else if (id < 1.5) { flow(false, p, q, s, c, g); }
        else if (id < 2.5) { flow(true, p, q, s, c, g); }
        else {
          vec4 st = id < 3.5 ? aStatA : aStatB; float mode = id < 3.5 ? uStatColA : uStatColB;
          p = st.xyz; s = st.w < -.5 ? 0. : 1.;
          q = mode > 2.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
          if (mode > 1.5 && mode < 2.5) { q = qAxis(vec3(0., 1., 0.), -PI * .5); }
          if (mode > 2.5) mode = 0.;
          if (st.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
          c = statColour(mode, p); g = mode > 1.5 && mode < 2.5 ? .55 : 1.;
          if (isErr()) { c = uFault; }
        }
      }

      void main(){
        float st = clamp(uStage, 0., 4.999);
        float i = floor(st), f = st - i;
        int ia = int(i), ib = min(ia + 1, 5);
        vec3 pA, cA, pB, cB; vec4 qA, qB; float sA, gA, sB, gB;
        form(uForm[ia], pA, qA, sA, cA, gA);
        vec3 p = pA; vec4 q = qA; float s = sA; vec3 c = cA; float g = gA;
        float e = smoothstep(0., 1., clamp(f * 1.75 - aSeed.x * .75, 0., 1.));
        if (e > 0.) {
          form(uForm[ib], pB, qB, sB, cB, gB);
          if (dot(qA, qB) < 0.) qB = -qB;
          p = mix(pA, pB, e) + vec3(0., sin(PI * e) * (.25 + aSeed.y * .6), 0.);
          q = normalize(mix(qA, qB, e)); s = mix(sA, sB, e); c = mix(cA, cB, e); g = mix(gA, gB, e);
        }
        vec3 world = qRot(q, position * s) + p;
        vec4 mv = viewMatrix * vec4(world, 1.);
        vN = normalize(mat3(viewMatrix) * qRot(q, normal));
        vUv = uv; vCol = c; vGlow = g; vDepth = -mv.z; vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      precision highp float;
      uniform float uFogNear, uFogFar, uGlow;
      varying vec3 vN; varying vec2 vUv; varying vec3 vCol; varying float vGlow; varying float vDepth; varying vec3 vView;
      void main(){
        vec3 n = normalize(vN);
        float lam = max(dot(n, normalize(vec3(.35, .8, .55))), 0.);
        float rim = pow(1. - abs(dot(n, vView)), 3.);
        float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
        float edge = 1. - smoothstep(.0, .07, e);
        vec3 col = vCol * (.035 + .2 * lam) + vCol * rim * .35 + vCol * edge * vGlow * 1.35 * uGlow;
        col *= 1. - smoothstep(uFogNear, uFogFar, vDepth);
        gl_FragColor = vec4(col, 1.);
      }`,
  });
  const mesh = new Mesh(g, mat);
  mesh.frustumCulled = false;
  return { mesh, mat, statA, statB };
}

// Static formations, laid out on the CPU: stacks, bins, the mark, and the broken line.
function layoutStatic(out, spec, aErr) {
  if (!spec) return;
  const valid = [], errs = [];
  for (let i = 0; i < RECORDS; i++) (aErr[i] > 0 && spec.errors !== "valid" ? errs : valid).push(i);
  const put = (i, x, y, z, w = 0) => out.set([x, y, z, w], i * 4);
  const hideAll = (list) => list.forEach((i) => put(i, 0, -50, 0, -1));

  if (spec.type === "stacks") {
    // columns of flat records; heights in the given proportions
    const cols = spec.heights, total = cols.reduce((a, b) => a + b, 0), gap = spec.gap ?? 0.62;
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
    // quarantined errors: a short amber stack set apart from the finished work
    errs.forEach((i, j) => {
      const l = Math.floor(j / 12), m = j % 12;
      put(i, cols.length * gap * 0.5 + 0.55 + (m % 3) * 0.104, l * dy, -0.9 + Math.floor(m / 3) * 0.068);
    });
  } else if (spec.type === "mark") {
    // the C ring (a 75% arc rotated 25 degrees) and the dot, as an extruded block of records
    const R = 1.25, t = 0.34, dotR = 0.3, pts = [];
    const a0 = (25 + 0) * Math.PI / 180;
    for (let y = -1.7; y <= 1.7; y += 0.072) for (let x = -1.7; x <= 1.7; x += 0.108) {
      const r = Math.hypot(x, y); let ang = Math.atan2(-y, x) - a0; ang = (ang + Math.PI * 4) % (Math.PI * 2);
      const inRing = Math.abs(r - R) < t / 2 && ang < Math.PI * 2 * 0.752;
      const d = Math.hypot(x - R * 0.927, y - R * 0.345);
      if (inRing || d < dotR) pts.push([x, y]);
    }
    const layers = Math.ceil(valid.length / pts.length);
    valid.forEach((i, j) => {
      const p = pts[j % pts.length], l = Math.floor(j / pts.length);
      put(i, p[0], p[1] + (spec.y ?? 0.9), (l - (layers - 1) / 2) * 0.03);
    });
    hideAll(errs);
  } else if (spec.type === "broken") {
    // a straight line with a gap; the records past the gap fall away
    valid.concat(errs).forEach((i, j) => {
      const lane = j % LANES, col = Math.floor(j / LANES), x = -9 + col * 0.12;
      if (x > 0 && x < 1.3) put(i, x + (rnd() - 0.5) * 0.4, -0.6 - rnd() * 3.2, (lane - 3.5) * 0.11 + (rnd() - 0.5) * 0.5, 1);
      else put(i, x, 0, (lane - 3.5) * 0.11);
    });
  }
}

// ---------- the globe ----------
function buildGlobe() {
  const group = new Group();
  const raw = Uint8Array.from(atob(LAND), (c) => c.charCodeAt(0));
  const ll = new Int16Array(raw.buffer);
  const step = small() ? 2 : 1, n = Math.floor(ll.length / 2 / step);
  const pos = new Float32Array(n * 3), rand = new Float32Array(n);
  const toXYZ = (lat, lon, r = 1) => {
    const la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
    return [r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo)];
  };
  for (let i = 0; i < n; i++) {
    const lat = ll[i * 2 * step] / 32767 * 90, lon = ll[i * 2 * step + 1] / 32767 * 180;
    pos.set(toXYZ(lat, lon), i * 3); rand[i] = rnd();
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new BufferAttribute(pos, 3));
  g.setAttribute("aRand", new BufferAttribute(rand, 1));
  const landMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uOpacity: { value: 1 }, uScale: { value: 1 }, uDpr: { value: 1 }, uCol: { value: C.steel }, uHi: { value: C.paper } },
    vertexShader: /* glsl */`
      attribute float aRand; uniform float uScale, uDpr; varying float vFace; varying float vR;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.);
        vFace = dot(normalize(mat3(modelViewMatrix) * position), normalize(-mv.xyz));
        vR = aRand;
        gl_PointSize = (2.2 + aRand * .9) * uDpr * uScale * (5. / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uOpacity; uniform vec3 uCol, uHi; varying float vFace; varying float vR;
      void main(){
        vec2 d = gl_PointCoord - .5; if (dot(d, d) > .25) discard;
        float front = smoothstep(-.1, .45, vFace);
        vec3 c = mix(mix(uCol, uHi, .35), uHi, step(.97, vR) * .7) * (.12 + .88 * front) * .9;
        gl_FragColor = vec4(c * uOpacity, 1.);
      }`,
  });
  group.add(new Points(g, landMat));

  // limb: a thin fresnel shell, so the sphere reads as a solid body
  const limbMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: BackSide,
    uniforms: { uOpacity: { value: 1 }, uCol: { value: C.reach } },
    vertexShader: `varying float vF; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vec3 n = normalize(normalMatrix * normal); vF = pow(1. - abs(dot(n, normalize(-mv.xyz))), 4.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uOpacity; uniform vec3 uCol; varying float vF; void main(){ gl_FragColor = vec4(uCol * vF * .3 * uOpacity, 1.); }`,
  });
  group.add(new Mesh(new SphereGeometry(1.06, 64, 48), limbMat));

  // markets and the routes out of the UK
  const LDN = [51.5, -0.12];
  const MARKETS = [[40.7, -74], [43.65, -79.4], [19.4, -99.1], [-23.5, -46.6], [25.2, 55.3], [19.1, 72.9], [1.35, 103.8], [-33.9, 151.2], [35.7, 139.7], [31.2, 121.5], [-26.2, 28], [59.3, 18.1], [40.4, -3.7], [48.9, 2.35], [52.5, 13.4], [45.5, 9.2], [52.4, 4.9], [37.6, 127], [-37.8, 145], [34.05, -118.2], [41.9, -87.6], [47.6, -122.3], [25.8, -80.2], [55.7, 12.6], [50.1, 14.4], [52.2, 21], [38.7, -9.1], [41, 29], [30, 31.2], [-34.6, -58.4], [13.75, 100.5], [22.3, 114.2]];
  const routes = [0, 4, 6, 8, 3, 7, 5, 19, 10, 9, 1, 30];
  const mpos = [], mkind = [];
  MARKETS.forEach((m) => { mpos.push(...toXYZ(m[0], m[1], 1.004)); mkind.push(0); });
  mpos.push(...toXYZ(LDN[0], LDN[1], 1.006)); mkind.push(1);
  const mg = new BufferGeometry();
  mg.setAttribute("position", new BufferAttribute(new Float32Array(mpos), 3));
  mg.setAttribute("aKind", new BufferAttribute(new Float32Array(mkind), 1));
  const markMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uOpacity: { value: 1 }, uTime: { value: 0 }, uDpr: { value: 1 }, uLine: { value: C.line }, uPaper: { value: C.paper } },
    vertexShader: `attribute float aKind; uniform float uDpr, uTime; varying float vK; varying float vFace;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vFace = dot(normalize(mat3(modelViewMatrix)*position), normalize(-mv.xyz)); vK = aKind;
      gl_PointSize = (aKind > .5 ? 9. + sin(uTime * 2.4) * 2. : 5.) * uDpr * (5. / -mv.z); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uOpacity; uniform vec3 uLine, uPaper; varying float vK; varying float vFace;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard; float a = smoothstep(.5, .1, r) * smoothstep(-.05, .3, vFace);
      gl_FragColor = vec4(mix(uLine, uPaper, vK) * a * 1.6 * uOpacity, 1.); }`,
  });
  group.add(new Points(mg, markMat));

  // routes: great-circle arcs, lifted off the surface, drawn as travelling dots
  const SEG = 90, apos = [], au = [], aid = [];
  const vL = new Vector3(...toXYZ(LDN[0], LDN[1]));
  routes.forEach((mi, ri) => {
    const vM = new Vector3(...toXYZ(MARKETS[mi][0], MARKETS[mi][1]));
    const ang = vL.angleTo(vM);
    for (let s = 0; s <= SEG; s++) {
      const t = s / SEG;
      const v = new Vector3().copy(vL).multiplyScalar(Math.sin((1 - t) * ang) / Math.sin(ang)).add(new Vector3().copy(vM).multiplyScalar(Math.sin(t * ang) / Math.sin(ang)));
      v.normalize().multiplyScalar(1.004 + Math.sin(Math.PI * t) * (0.08 + ang * 0.12));
      apos.push(v.x, v.y, v.z); au.push(t); aid.push(ri / routes.length);
    }
  });
  const ag = new BufferGeometry();
  ag.setAttribute("position", new BufferAttribute(new Float32Array(apos), 3));
  ag.setAttribute("aU", new BufferAttribute(new Float32Array(au), 1));
  ag.setAttribute("aId", new BufferAttribute(new Float32Array(aid), 1));
  const arcMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uOpacity: { value: 1 }, uTime: { value: 0 }, uDpr: { value: 1 }, uReach: { value: C.reach }, uLine: { value: C.line } },
    vertexShader: `attribute float aU, aId; uniform float uTime, uDpr; varying float vA; varying float vU; varying float vFace;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vFace = dot(normalize(mat3(modelViewMatrix)*position), normalize(-mv.xyz));
      float head = fract(uTime * .16 + aId * 1.7); float d = head - aU;
      vA = .16 + smoothstep(.22, 0., d) * step(0., d) * .95; vU = aU;
      gl_PointSize = (1.5 + vA * 1.6) * uDpr * (5. / -mv.z); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uOpacity; uniform vec3 uReach, uLine; varying float vA; varying float vU; varying float vFace;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; float f = smoothstep(-.35, .2, vFace);
      gl_FragColor = vec4(mix(uReach, uLine, vU) * vA * f * uOpacity, 1.); }`,
  });
  group.add(new Points(ag, arcMat));
  group.rotation.x = 0.32;
  return { group, mats: [landMat, limbMat, markMat, arcMat], landMat, markMat, arcMat };
}

// ---------- the line: ground grid, rails and the gate ----------
function buildStage() {
  const grid = new Mesh(new PlaneGeometry(160, 160), new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uOpacity: { value: 0 }, uCol: { value: C.steel }, uLine: { value: C.line } },
    vertexShader: `varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uOpacity; uniform vec3 uCol, uLine; varying vec3 vW; varying float vD;
      float gl(vec2 p, float s){ vec2 g = abs(fract(p / s - .5) - .5) / fwidth(p / s); return 1. - min(min(g.x, g.y), 1.); }
      void main(){ float minor = gl(vW.xz, .5) * .35, major = gl(vW.xz, 2.5) * .8;
      float fade = 1. - smoothstep(4., 34., vD);
      gl_FragColor = vec4(uCol * max(minor, major) * fade * .3 * uOpacity, 1.); }`,
  }));
  grid.rotation.x = -Math.PI / 2; grid.position.y = -0.06;

  const railMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending,
    uniforms: { uOpacity: { value: 0 }, uCol: { value: C.line }, uTime: { value: 0 } },
    vertexShader: `varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform float uOpacity, uTime; uniform vec3 uCol; varying vec3 vW; varying float vD;
      void main(){ float pulse = .55 + .45 * smoothstep(.92, 1., fract(vW.x * .08 - uTime * .12));
      gl_FragColor = vec4(uCol * pulse * (1. - smoothstep(8., 40., vD)) * 1.1 * uOpacity, 1.); }`,
  });
  const rails = new Group();
  [-0.47, 0.47].forEach((z) => { const r = new Mesh(new BoxGeometry(90, 0.006, 0.006), railMat); r.position.set(-8, -0.05, z); rails.add(r); });

  const gateMat = new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide,
    uniforms: { uOpacity: { value: 0 }, uTime: { value: 0 }, uCol: { value: C.line }, uPaper: { value: C.paper } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `uniform float uOpacity, uTime; uniform vec3 uCol, uPaper; varying vec2 vUv;
      void main(){ float scan = smoothstep(.04, 0., abs(vUv.y - fract(uTime * .45)));
      float frame = 1. - smoothstep(0., .012, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
      float fill = .05 + .03 * step(.5, fract(vUv.y * 24.));
      vec3 c = uCol * (fill + scan * .9) + uPaper * frame * 1.4;
      gl_FragColor = vec4(c * uOpacity, 1.); }`,
  });
  const gate = new Mesh(new PlaneGeometry(1.25, 0.62), gateMat);
  gate.rotation.y = Math.PI / 2; gate.position.set(0, 0.25, 0);
  return { grid, rails, gate, gridMat: grid.material, railMat, gateMat };
}

// ---------- assemble ----------
const rec = buildRecords();
const globe = buildGlobe();
const stage = buildStage();
scene.add(rec.mesh, globe.group, stage.grid, stage.rails, stage.gate);

// ---------- post: bloom and a film grade ----------
let composer = null, bloom = null, grade = null;
const usePost = !lowEnd && !small();
function makeComposer() {
  const rt = new WebGLRenderTarget(2, 2, { type: HalfFloatType, samples: 4 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new Vector2(2, 2), 0.62, 0.32, 0.62);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  grade = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new Vector2(1, 1) } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime; uniform vec2 uRes; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){ vec2 c = vUv - .5; float r2 = dot(c, c);
      vec2 off = c * r2 * .006;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1. - smoothstep(.18, .75, r2) * .55;
      col += (h(vUv * uRes + fract(uTime) * 91.7) - .5) * .028;
      gl_FragColor = vec4(col, 1.); }`,
  });
  composer.addPass(grade);
}
if (usePost) { try { makeComposer(); } catch (e) { composer = null; } }

// ---------- direction ----------
const lerp = (a, b, t) => a + (b - a) * t;
const v3 = (a) => new Vector3(...a);
const ease = (t) => t * t * (3 - 2 * t);
const keys = shot.cameras.map((k) => ({ pos: v3(k.pos), look: v3(k.look), shift: k.shift ?? 0.2, fov: k.fov ?? 34 }));
const story = shot.scroll === "story" ? canvas.closest("[data-story]") : null;
const sections = story ? Array.from(story.querySelectorAll("[data-stage]")) : [];

// the story position: which step sits across the middle of the viewport, eased between steps
function scrollStage() {
  if (!sections.length) return null;
  const y = innerHeight * 0.55;
  const tops = sections.map((s) => ({ top: s.getBoundingClientRect().top, stage: parseFloat(s.dataset.stage) }));
  for (let i = tops.length - 1; i >= 0; i--) {
    if (y >= tops[i].top) {
      const next = tops[i + 1];
      if (!next) return tops[i].stage;
      const t = (y - tops[i].top) / Math.max(1, next.top - tops[i].top);
      return lerp(tops[i].stage, next.stage, ease(Math.min(1, Math.max(0, (t - 0.35) / 0.65))));
    }
  }
  return tops[0]?.stage ?? 0;
}

let shown = shot.intro && !reduce && still === null ? 0 : shot.rest, target = shown;
const t0 = performance.now();
let last = t0, time = still !== null ? 40 : 0, frames = 0;
const tmpPos = new Vector3(), tmpLook = new Vector3(), curPos = new Vector3(), curLook = new Vector3();
let curShift = 0, curFov = 34, first = true;

const clampStage = (s, n) => (Number.isFinite(s) ? Math.min(Math.max(s, 0), n - 1) : 0);
function camAt(s) {
  s = clampStage(s, keys.length);
  const i = Math.min(keys.length - 1, Math.floor(s)), j = Math.min(keys.length - 1, i + 1), f = ease(s - i);
  tmpPos.lerpVectors(keys[i].pos, keys[j].pos, f);
  tmpLook.lerpVectors(keys[i].look, keys[j].look, f);
  return { shift: lerp(keys[i].shift, keys[j].shift, f), fov: lerp(keys[i].fov, keys[j].fov, f) };
}

function globeAt(s) { // where the globe sits, by stage
  const g = shot.globe;
  if (!g) return { pos: [0, 0, 0], scale: 1, opacity: 0 };
  s = clampStage(s, g.length);
  const i = Math.min(g.length - 1, Math.floor(s)), j = Math.min(g.length - 1, i + 1), f = ease(s - i);
  const a = g[i], b = g[j];
  return { pos: a.pos.map((v, k) => lerp(v, b.pos[k], f)), scale: lerp(a.scale, b.scale, f), opacity: lerp(a.opacity, b.opacity, f) };
}
const band = (s, a, b, c, d) => Math.min(Math.max((s - a) / Math.max(1e-4, b - a), 0), 1) * (1 - Math.min(Math.max((s - c) / Math.max(1e-4, d - c), 0), 1));

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, small() ? 1.5 : lowEnd ? 1.25 : 1.75);
  const w = Math.max(1, canvas.clientWidth), h = Math.max(1, canvas.clientHeight);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  if (composer) {
    composer.setPixelRatio(dpr); composer.setSize(w, h);
    bloom.setSize(w * dpr * 0.5, h * dpr * 0.5);
    grade.uniforms.uRes.value.set(w * dpr, h * dpr);
  }
  [globe.landMat, globe.markMat, globe.arcMat].forEach((m) => (m.uniforms.uDpr.value = dpr * (h / 900)));
}
new ResizeObserver(() => { resize(); wake(); }).observe(canvas);
resize();
let visible = true;
new IntersectionObserver((es) => { visible = es[es.length - 1].isIntersecting; if (visible) wake(); }, { rootMargin: "120px 0px" }).observe(canvas);

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (still === null && !reduce) time += dt;

  // where the story is
  const sc = scrollStage();
  if (sc !== null) target = sc;
  else if (shot.intro) target = still !== null ? still : shot.rest;
  if (still !== null) target = still;
  const k = reduce || still !== null || first ? 1 : 1 - Math.exp(-dt * (shot.intro && sc === null ? 1.1 : 2.6));
  if (!Number.isFinite(target)) target = shot.rest || 0;
  shown += (target - shown) * k;
  if (Math.abs(target - shown) < 1e-4) shown = target;

  // camera, with a slight handheld drift
  const cam = camAt(shown);
  const r = canvas.getBoundingClientRect();
  const pageT = sections.length ? 0 : Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
  tmpPos.add(v3(shot.dolly || [0, 0, 0]).multiplyScalar(pageT));
  const drift = reduce || still !== null ? 0 : 1;
  tmpPos.x += Math.sin(time * 0.21) * 0.05 * drift; tmpPos.y += Math.sin(time * 0.17 + 1) * 0.035 * drift;
  const ck = first ? 1 : 1 - Math.exp(-dt * 4);
  curPos.lerp(tmpPos, ck); curLook.lerp(tmpLook, ck);
  if (first) { curPos.copy(tmpPos); curLook.copy(tmpLook); }
  const w = Math.max(1, canvas.clientWidth), h = Math.max(1, canvas.clientHeight), asp = w / h;
  const widen = asp < 1.6 ? Math.pow(1.6 / asp, 0.62) : 1; // narrow panels widen the lens so the subject stays in frame
  curShift = lerp(curShift, small() ? 0 : cam.shift, ck); curFov = lerp(curFov, Math.min(75, cam.fov * widen), ck);
  if (first) { curShift = small() ? 0 : cam.shift; curFov = Math.min(75, cam.fov * widen); }
  camera.position.copy(curPos); camera.lookAt(curLook); camera.fov = curFov;
  camera.setViewOffset(w, h, -curShift * w, 0, w, h);
  camera.updateProjectionMatrix();

  // scene state
  const g = globeAt(shown);
  globe.group.position.set(...g.pos); globe.group.scale.setScalar(g.scale);
  globe.group.rotation.y = (shot.globeYaw ?? 0) + time * (shot.globeSpin ?? 0.045);
  globe.group.visible = g.opacity > 0.002;
  globe.mats.forEach((m) => (m.uniforms.uOpacity.value = g.opacity));
  globe.landMat.uniforms.uScale.value = Math.sqrt(g.scale / 1.3);
  globe.markMat.uniforms.uTime.value = time; globe.arcMat.uniforms.uTime.value = time;

  const u = rec.mat.uniforms;
  u.uTime.value = time; u.uStage.value = shown;
  u.uGlobePos.value.set(...g.pos); u.uGlobeScale.value = g.scale;
  u.uGlow.value = shot.glow ?? 1;

  const vis = shot.visibility || {};
  stage.gridMat.uniforms.uOpacity.value = vis.grid ? band(shown, ...vis.grid) : 0;
  stage.railMat.uniforms.uOpacity.value = vis.rails ? band(shown, ...vis.rails) : 0;
  stage.gateMat.uniforms.uOpacity.value = vis.gate ? band(shown, ...vis.gate) : 0;
  stage.railMat.uniforms.uTime.value = time; stage.gateMat.uniforms.uTime.value = time;
  stage.grid.visible = stage.gridMat.uniforms.uOpacity.value > 0.002;
  stage.rails.visible = stage.railMat.uniforms.uOpacity.value > 0.002;
  stage.gate.visible = stage.gateMat.uniforms.uOpacity.value > 0.002;

  if (composer) { grade.uniforms.uTime.value = time; composer.render(dt); } else renderer.render(scene, camera);

  if (first) { first = false; requestAnimationFrame(() => host.classList.add("is-live")); }
  frames++;
  if (still !== null) { if (frames > 3) { root.classList.add("film-still"); return; } }
  // reduced motion: draw only when the scroll position changes
  if (reduce && Math.abs(target - shown) < 1e-4 && sections.length) { idle = true; return; }
  if (reduce && !sections.length) { idle = true; return; }
  if (!visible || document.hidden) { idle = true; return; }
  requestAnimationFrame(frame);
}
var idle = false;
function wake() { if (idle) { idle = false; last = performance.now(); requestAnimationFrame(frame); } }
addEventListener("scroll", wake, { passive: true });
addEventListener("resize", wake);
document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); fail(); });
requestAnimationFrame(frame);
}

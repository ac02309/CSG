/* The scene. Every [data-form] (or [data-forms]) element in the layout gets its own small, transparent
   canvas that scrolls with the page like any other element, so nothing ever lags behind the text.
   Inside it, the records gather into a formation:

     orbit    the globe, with records orbiting it              (global)
     scatter  loose records: the manual work, before           (the problem)
     line     one straight conveyor                             (direct)
     gate     every record checked, failures held back          (no nonsense)
     a        the result: stacks, even capacity or bins         (efficiency)
     grid     a live, tidy sheet: reports and records           (automate)
     b        the Clarke Systems Group mark                     (the call to action)

   A [data-forms="scatter,line,gate,a"] element inside a [data-drive] section plays the formations in order,
   scrubbed by how far the reader has scrolled through that section. Every state is a pure function of the
   scroll position, so scrolling fast, slow or backwards always shows a correct frame.

   The numbers are real: 4,000 records (records validated) and 180 errors (errors intercepted), from the
   launch quality-control case study. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Vector3, BoxGeometry, InstancedBufferGeometry,
  InstancedBufferAttribute, ShaderMaterial, Mesh, BufferGeometry, BufferAttribute, Points, PlaneGeometry,
  DoubleSide, Group, SphereGeometry, ColorManagement, LinearSRGBColorSpace,
} from "three";
import { LAND } from "./land.js";

ColorManagement.enabled = false;

const RECORDS = 4000, ERRORS = 180, LANES = 8, COLS = RECORDS / LANES, SPACING = 0.15, MAXF = 8;
const RINGS = [[1.5, 0.2], [1.68, -0.42], [1.86, 0.62], [2.05, -0.1], [2.26, 0.38]];
const FORM = { orbit: 0, line: 1, gate: 2, a: 3, b: 4, scatter: 5, grid: 6 };
const FOV = 24, CAMZ = 40;
const root = document.documentElement, body = document.body;
const params = new URLSearchParams(location.search);
const still = params.has("still") ? parseFloat(params.get("still")) || 0 : null;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

const PAL = {
  slate: new Color(0x93a0b4), ink: new Color(0x0b1220), navy: new Color(0x1c2a4a),
  aqua: new Color(0x12b5a0), cobalt: new Color(0x2d4fe0), amber: new Color(0xf59e0b), pearl: new Color(0xdfe6f2),
};

const els = Array.from(document.querySelectorAll("[data-form],[data-forms]"));
function hasGL2() { try { return !!document.createElement("canvas").getContext("webgl2"); } catch (e) { return false; } }
if (els.length) { if (hasGL2()) init(); else root.classList.add("scene-off"); }

function init() {
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// ---------- shared record data, computed once and uploaded by every view ----------
const statSpec = (body.dataset.statA || "stacks:1,2,3,4").split(":");
const aSeed = new Float32Array(RECORDS * 4), aOrbit = new Float32Array(RECORDS * 3), aLine = new Float32Array(RECORDS * 2);
const aErr = new Float32Array(RECORDS), aStatA = new Float32Array(RECORDS * 4), aStatB = new Float32Array(RECORDS * 4);
{
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
}
const extA = layoutStatic(aStatA, statSpec, false);
const extB = layoutStatic(aStatB, ["mark"], true);
const errMode = (statSpec[0] === "stacks" && statSpec[1] === "1,1,1,1,1") || statSpec[0] === "bins" ? 0 : 1;

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
  let mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
  for (let i = 0; i < RECORDS; i++) { if (out[i * 4 + 3] < -0.5) continue; const x = out[i * 4], y = out[i * 4 + 1]; mnx = Math.min(mnx, x); mxx = Math.max(mxx, x); mny = Math.min(mny, y); mxy = Math.max(mxy, y); }
  const cx = (mnx + mxx) / 2, cy = (mny + mxy) / 2;
  for (let i = 0; i < RECORDS; i++) { if (out[i * 4 + 3] < -0.5) continue; out[i * 4] -= cx; out[i * 4 + 1] -= cy; }
  return { w: mxx - mnx, h: mxy - mny };
}

// globe data, shared
const toXYZ = (lat, lon, r = 1) => { const la = lat * Math.PI / 180, lo = lon * Math.PI / 180; return [r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo)]; };
let GLOBE = null;
function globeData() {
  if (GLOBE) return GLOBE;
  const raw = Uint8Array.from(atob(LAND), (c) => c.charCodeAt(0));
  const ll = new Int16Array(raw.buffer);
  const n = ll.length / 2;
  const pos = new Float32Array(n * 3), rand = new Float32Array(n);
  for (let i = 0; i < n; i++) { pos.set(toXYZ(ll[i * 2] / 32767 * 90, ll[i * 2 + 1] / 32767 * 180, 1.006), i * 3); rand[i] = rnd(); }
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
  GLOBE = { pos, rand, apos: new Float32Array(apos), au: new Float32Array(au), aid: new Float32Array(aid), home: new Float32Array(toXYZ(...LDN, 1.012)) };
  return GLOBE;
}

const QUAT = /* glsl */`
vec4 qAxis(vec3 a, float ang){ return vec4(normalize(a) * sin(ang * .5), cos(ang * .5)); }
vec4 qMul(vec4 a, vec4 b){ return vec4(a.w * b.xyz + b.w * a.xyz + cross(a.xyz, b.xyz), a.w * b.w - dot(a.xyz, b.xyz)); }
vec3 qRot(vec4 q, vec3 v){ return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`;
const qAxis = (ax, a) => { const s = Math.sin(a / 2); const l = Math.hypot(...ax); return [ax[0] / l * s, ax[1] / l * s, ax[2] / l * s, Math.cos(a / 2)]; };
const qMul = (a, b) => [a[3] * b[0] + b[3] * a[0] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] + b[3] * a[1] + a[2] * b[0] - a[0] * b[2], a[3] * b[2] + b[3] * a[2] + a[0] * b[1] - a[1] * b[0], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
const qRot = (q, v) => { const [x, y, z, w] = q; const t = [2 * (y * v[2] - z * v[1]), 2 * (z * v[0] - x * v[2]), 2 * (x * v[1] - y * v[0])]; return [v[0] + w * t[0] + (y * t[2] - z * t[1]), v[1] + w * t[1] + (z * t[0] - x * t[2]), v[2] + w * t[2] + (x * t[1] - y * t[0])]; };

// size of each formation (for fitting it to its element) and its resting orientation
const EXT = { 0: { w: 4.6, h: 4.4 }, 1: { w: 7.2, h: 1.9 }, 2: { w: 7.4, h: 2.6 }, 3: { w: extA.w * 0.92 + 0.3, h: extA.h + 0.8 }, 4: { w: extB.w * 0.96, h: extB.h * 0.96 }, 5: { w: 4.6, h: 3.0 }, 6: { w: 8.0, h: 3.4 } };
const BASEQ = {
  0: [0, 0, 0, 1], 1: qMul(qAxis([1, 0, 0], 0.42), qAxis([0, 1, 0], -0.62)), 2: qMul(qAxis([1, 0, 0], 0.4), qAxis([0, 1, 0], -0.6)),
  3: qMul(qAxis([1, 0, 0], 0.34), qAxis([0, 1, 0], -0.55)), 4: [0, 0, 0, 1], 5: [0, 0, 0, 1], 6: qMul(qAxis([1, 0, 0], -0.62), qAxis([0, 1, 0], -0.28)),
};
const SHADOW = { 0: [0, -1.4, 2.6, 0.5], 1: [0, -0.4, 8, 1.4], 2: [0, -0.4, 8, 1.6], 3: [0, -(extA.h / 2 + 0.25), extA.w + 0.8, 0.9], 4: [0, -1.6, 2.4, 0.35], 5: [0, -1.7, 4.2, 0.6], 6: [0, -1.5, 7, 0.9] };

const VERT = /* glsl */`
  precision highp float;
  #define PI 3.14159265
  attribute vec4 aSeed; attribute vec3 aOrbit; attribute vec2 aLine; attribute float aErr; attribute vec4 aStatA; attribute vec4 aStatB;
  uniform float uTime, uStage, uCount, uIntro, uErrMode, uForm[${MAXF}];
  uniform vec4 uAnchor[${MAXF}], uAnchorQ[${MAXF}];
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
    else if (id < 4.5) {
      vec4 v = id < 3.5 ? aStatA : aStatB;
      p = v.xyz; s = v.w < -.5 ? 0. : 1.;
      q = id < 3.5 ? qAxis(vec3(1., 0., 0.), -PI * .5) : vec4(0., 0., 0., 1.);
      if (v.w > .5) { q = tumble(.6); p.y -= mod(uTime * .05 + aSeed.x, 1.) * .4; }
      st.x = 1.;
      if (id < 3.5 && isErr()) st = vec2(0., 1.);
    } else if (id < 5.5) {
      // loose records: spread across inboxes and spreadsheets, drifting
      vec3 dir = normalize(aSeed.yzw - .5 + vec3(.0013, .0007, .0011));
      vec3 c = dir * pow(fract(aSeed.x * 7.31 + aSeed.w * 3.7), .42) * vec3(2.25, 1.3, 1.25);
      c += vec3(sin(uTime * .35 + aSeed.x * 31.), cos(uTime * .29 + aSeed.y * 23.), sin(uTime * .23 + aSeed.z * 17.)) * .07;
      p = c; q = tumble(.22); s = .95;
    } else {
      // a live sheet: every record in its row, a soft update rippling across it
      float i = aLine.x + aLine.y * LANES;
      float col = mod(i, 80.), row = floor(i / 80.);
      p = vec3((col - 39.5) * .1, (row - 24.5) * .068, 0.);
      float wave = sin(col * .16 - uTime * 1.1 + row * .05);
      p.z = wave * .045;
      q = vec4(0., 0., 0., 1.); s = 1.;
      st.x = .55 + .45 * smoothstep(.6, 1., wave);
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
      float span = .5 * (uAnchor[int(i)].w + uAnchor[int(j)].w);
      vec3 arc = vec3((aSeed.z - .5) * 2.4, (aSeed.y - .5) * 1.6 + .5, (aSeed.w - .5) * 2.4) * span * sin(PI * e);
      w = mix(wA, wB, e) + arc;
      q = normalize(mix(qA, qB, e)); s = mix(sA, sB, e); st = mix(tA, tB, e);
    }
    // arrival: the formation unfolds from its own centre the first time it is seen
    float ia = smoothstep(0., 1., clamp(uIntro * 1.6 - aSeed.x * .6, 0., 1.));
    vec3 c0 = uAnchor[int(i)].xyz;
    w = mix(c0 + (w - c0) * .2 + vec3(0., -.4, 0.) * uAnchor[int(i)].w, w, ia); s *= ia;
    vec3 world = qRot(q, position * s) + w;
    vec4 mv = viewMatrix * vec4(world, 1.);
    vN = normalize(mat3(viewMatrix) * qRot(q, normal));
    vUv = uv; vState = st; vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`;

const FRAG = /* glsl */`
  precision highp float;
  uniform vec2 uRes; uniform vec3 uSlate, uAqua, uCobalt, uAmber;
  varying vec3 vN; varying vec2 vUv; varying vec2 vState; varying vec3 vView;
  void main(){
    vec3 n = normalize(vN);
    vec3 grad = mix(uAqua, uCobalt, clamp(gl_FragCoord.x / uRes.x * 1.2 - .1, 0., 1.));
    float lam = max(dot(n, normalize(vec3(-.35, .75, .6))), 0.);
    float rim = pow(1. - abs(dot(n, vView)), 2.5);
    float e = min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y));
    float edge = 1. - smoothstep(.0, .085, e);
    vec3 fill = mix(vec3(.8 + .2 * lam), vec3(.86, .9, .96), .35);
    fill = mix(fill, mix(vec3(1.), grad, .22) * (.88 + .12 * lam), vState.x);
    fill = mix(fill, mix(vec3(1.), uAmber, .5) * (.9 + .1 * lam), vState.y);
    vec3 ec = mix(uSlate * .72, grad, vState.x);
    ec = mix(ec, uAmber * .92, vState.y);
    vec3 col = mix(fill, ec, edge * .92);
    col = mix(col, grad, rim * .12);
    gl_FragColor = vec4(col, 1.);
  }`;

// ---------- one view per element ----------
const views = [];
const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
let time = still !== null ? 40 : 12, last = performance.now(), running = false;
let VH = innerHeight;

function makeView(el) {
  const canvas = document.createElement("canvas");
  canvas.className = "view";
  canvas.setAttribute("aria-hidden", "true");
  el.appendChild(canvas);
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: "high-performance", preserveDrawingBuffer: still !== null });
    if (!renderer.capabilities.isWebGL2) throw new Error("webgl2");
  } catch (e) { canvas.remove(); el.classList.add("view-off"); return null; }
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  canvas.addEventListener("webglcontextlost", (ev) => { ev.preventDefault(); el.classList.add("view-off"); });
  const forms = (el.dataset.forms || el.dataset.form || "orbit").split(",").map((f) => FORM[f.trim()] ?? 0).slice(0, MAXF);
  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 1, 400);
  camera.position.set(0, 0, CAMZ);

  const base = new BoxGeometry(0.1, 0.064, 0.01);
  const g = new InstancedBufferGeometry();
  g.index = base.index;
  g.setAttribute("position", base.getAttribute("position"));
  g.setAttribute("normal", base.getAttribute("normal"));
  g.setAttribute("uv", base.getAttribute("uv"));
  g.instanceCount = RECORDS;
  g.setAttribute("aSeed", new InstancedBufferAttribute(aSeed, 4));
  g.setAttribute("aOrbit", new InstancedBufferAttribute(aOrbit, 3));
  g.setAttribute("aLine", new InstancedBufferAttribute(aLine, 2));
  g.setAttribute("aErr", new InstancedBufferAttribute(aErr, 1));
  g.setAttribute("aStatA", new InstancedBufferAttribute(aStatA, 4));
  g.setAttribute("aStatB", new InstancedBufferAttribute(aStatB, 4));
  const mat = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }, uStage: { value: 0 }, uCount: { value: forms.length }, uIntro: { value: 0 },
      uForm: { value: forms.concat(Array(MAXF).fill(0)).slice(0, MAXF) },
      uAnchor: { value: new Float32Array(MAXF * 4) }, uAnchorQ: { value: new Float32Array(MAXF * 4) },
      uErrMode: { value: errMode }, uRes: { value: [1, 1] },
      uSlate: { value: PAL.slate }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt }, uAmber: { value: PAL.amber },
    },
    vertexShader: VERT, fragmentShader: FRAG,
  });
  const records = new Mesh(g, mat);
  records.frustumCulled = false;
  scene.add(records);

  // soft contact shadow
  const shadow = new Mesh(new PlaneGeometry(1, 1), new ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uInk: { value: PAL.ink }, uA: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `uniform vec3 uInk; uniform float uA; varying vec2 vUv; void main(){ float d = length((vUv - .5) * 2.); gl_FragColor = vec4(uInk, uA * pow(1. - smoothstep(0., 1., d), 1.6)); }`,
  }));
  shadow.renderOrder = -2;
  scene.add(shadow);

  let globe = null, gate = null;
  if (forms.includes(0)) globe = makeGlobe(scene);
  if (forms.includes(2)) {
    gate = new Mesh(new PlaneGeometry(1.25, 0.62), new ShaderMaterial({
      transparent: true, depthWrite: false, side: DoubleSide,
      uniforms: { uTime: { value: 0 }, uA: { value: 1 }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
      fragmentShader: `uniform float uTime, uA; uniform vec3 uAqua, uCobalt; varying vec2 vUv;
        void main(){ float scan = smoothstep(.05, 0., abs(vUv.y - fract(uTime * .45)));
        float frame = 1. - smoothstep(0., .02, min(min(vUv.x, 1. - vUv.x), min(vUv.y, 1. - vUv.y)));
        vec3 c = mix(uAqua, uCobalt, vUv.x);
        gl_FragColor = vec4(c, (.07 + scan * .55 + frame * .9) * uA); }`,
    }));
    scene.add(gate);
  }
  const drive = el.closest("[data-drive]");
  const v = { el, canvas, renderer, scene, camera, mat, shadow, globe, gate, forms, drive, scales: forms.map(() => 1), intro: still !== null || reduce ? 1 : 0, visible: false, w: 0, h: 0, frames: 0, dpr: 1 };
  fit(v);
  return v;
}

function makeGlobe(scene) {
  const D = globeData();
  const group = new Group();
  const lg = new BufferGeometry();
  lg.setAttribute("position", new BufferAttribute(D.pos, 3));
  lg.setAttribute("aRand", new BufferAttribute(D.rand, 1));
  const land = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uPx: { value: 1 }, uInk: { value: PAL.navy }, uCobalt: { value: PAL.cobalt } },
    vertexShader: `attribute float aRand; uniform float uPx; varying float vR;
      void main(){ vR = aRand; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.85 + aRand * .35); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uInk, uCobalt; varying float vR;
      void main(){ vec2 d = gl_PointCoord - .5; float r = length(d); if (r > .5) discard;
      gl_FragColor = vec4(mix(uInk, uCobalt, step(.94, vR) * .8), smoothstep(.5, .3, r) * .78); }`,
  });
  group.add(new Points(lg, land));
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
  group.add(sphere);
  const ag = new BufferGeometry();
  ag.setAttribute("position", new BufferAttribute(D.apos, 3));
  ag.setAttribute("aU", new BufferAttribute(D.au, 1));
  ag.setAttribute("aId", new BufferAttribute(D.aid, 1));
  const arcs = new ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uAqua: { value: PAL.aqua }, uCobalt: { value: PAL.cobalt } },
    vertexShader: `attribute float aU, aId; uniform float uTime, uPx; varying float vA; varying float vU;
      void main(){ float head = fract(uTime * .14 + aId * 1.7); float d = head - aU;
      vA = .18 + smoothstep(.25, 0., d) * step(0., d) * .82; vU = aU;
      vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (.7 + vA); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uAqua, uCobalt; varying float vA; varying float vU;
      void main(){ vec2 d = gl_PointCoord - .5; if (dot(d,d) > .25) discard; gl_FragColor = vec4(mix(uAqua, uCobalt, vU), vA); }`,
  });
  group.add(new Points(ag, arcs));
  const lp = new BufferGeometry(); lp.setAttribute("position", new BufferAttribute(D.home, 3));
  const home = new ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: { uTime: { value: 0 }, uPx: { value: 1 }, uAqua: { value: PAL.aqua } },
    vertexShader: `uniform float uTime, uPx; varying float vP; void main(){ vP = fract(uTime * .5); vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = uPx * (3. + vP * 6.); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uAqua; varying float vP; void main(){ float r = length(gl_PointCoord - .5) * 2.; if (r > 1.) discard;
      float core = smoothstep(.36, .2, r); float ring = smoothstep(.06, 0., abs(r - .82)) * (1. - vP);
      gl_FragColor = vec4(uAqua, max(core, ring)); }`,
  });
  group.add(new Points(lp, home));
  group.userData = { land, arcs, home };
  scene.add(group);
  return group;
}

function fit(v) {
  const W = Math.max(1, v.canvas.clientWidth), H = Math.max(1, v.canvas.clientHeight);
  if (W === v.w && H === v.h) return;
  v.w = W; v.h = H;
  const dpr = Math.min(devicePixelRatio || 1, W * H > 700000 ? 1.5 : 1.75);
  v.renderer.setPixelRatio(dpr);
  v.renderer.setSize(W, H, false);
  v.camera.aspect = W / H; v.camera.updateProjectionMatrix();
  v.mat.uniforms.uRes.value = [W * dpr, H * dpr];
  v.dpr = dpr;
  // the formation fits the element itself; the canvas bleeds past it so nothing is clipped
  const wpp = (2 * Math.tan(FOV * Math.PI / 360) * CAMZ) / H;
  const ew = v.el.clientWidth * wpp, eh = v.el.clientHeight * wpp;
  v.scales = v.forms.map((f) => Math.min(ew / EXT[f].w, eh / EXT[f].h) * 0.94);
}

// how far through its section the reader is, mapped to a formation index (or a blend of two)
function stageOf(v) {
  if (still !== null) return clamp(still, 0, v.forms.length - 1);
  if (!v.drive || v.forms.length < 2) return 0;
  const r = v.drive.getBoundingClientRect();
  const p = clamp(-r.top / Math.max(1, r.height - VH), 0, 1);
  const n = v.forms.length, s = p * n - 0.5, k = Math.floor(s);
  return clamp(k + smooth(0.2, 0.8, s - k), 0, n - 1);
}

function draw(v, dt) {
  fit(v);
  const r = v.el.getBoundingClientRect();
  const c = clamp((r.top + r.height / 2) / VH - 0.5, -1, 1);
  const stage = stageOf(v);
  if (!reduce) v.intro = Math.min(1, v.intro + dt / 1.3);
  const sway = reduce ? [0, 0, 0, 1] : qMul(qAxis([0, 1, 0], -c * 0.3 + tilt.x * 0.22), qAxis([1, 0, 0], c * 0.1 + tilt.y * 0.12));
  const A = v.mat.uniforms.uAnchor.value, Q = v.mat.uniforms.uAnchorQ.value;
  v.forms.forEach((f, k) => { A.set([0, 0, 0, v.scales[k]], k * 4); Q.set(qMul(sway, BASEQ[f]), k * 4); });
  const u = v.mat.uniforms;
  u.uTime.value = time; u.uStage.value = stage; u.uIntro.value = smooth(0, 1, v.intro);

  // which formation is showing, and how fully (1 at rest, 0 mid-transition)
  const k = Math.round(stage), rest = 1 - Math.min(1, Math.abs(stage - k) * 2.2);
  const fk = v.forms[k], sk = v.scales[k], qk = qMul(sway, BASEQ[fk]);
  const [ox, oy, sw, sh] = SHADOW[fk];
  const sp = qRot(qk, [ox, oy, 0]);
  v.shadow.position.set(sp[0] * sk, sp[1] * sk, -2);
  v.shadow.scale.set(sw * sk, sh * sk, 1);
  v.shadow.material.uniforms.uA.value = 0.1 * rest * u.uIntro.value;

  const weight = (form) => { let w = 0; v.forms.forEach((f, i) => { if (f === form) w = Math.max(w, 1 - Math.min(1, Math.abs(stage - i) * 1.6)); }); return w; };
  if (v.globe) {
    const w = weight(0), i0 = v.forms.indexOf(0), s0 = v.scales[i0] * smooth(0, 1, w) * (0.6 + 0.4 * u.uIntro.value);
    v.globe.visible = s0 > 0.001;
    v.globe.scale.setScalar(Math.max(0.001, s0));
    v.globe.quaternion.set(...qMul(sway, qMul(qAxis([1, 0, 0], 0.32), qAxis([0, 1, 0], -1.25 + time * 0.035))));
    const px = Math.max(1.4, 2.3 * v.dpr * Math.min(1.2, v.scales[i0] / 3));
    const U = v.globe.userData;
    U.land.uniforms.uPx.value = px; U.arcs.uniforms.uPx.value = px * 1.2; U.home.uniforms.uPx.value = px * 1.6;
    U.arcs.uniforms.uTime.value = time; U.home.uniforms.uTime.value = time;
  }
  if (v.gate) {
    const w = weight(2), i2 = v.forms.indexOf(2), s2 = v.scales[i2], q2 = qMul(sway, BASEQ[2]);
    const gp = qRot(q2, [0, 0.25, 0]);
    v.gate.visible = w > 0.01;
    v.gate.position.set(gp[0] * s2, gp[1] * s2, gp[2] * s2);
    v.gate.quaternion.set(...qMul(q2, qAxis([0, 1, 0], Math.PI / 2)));
    v.gate.scale.setScalar(s2);
    v.gate.material.uniforms.uTime.value = time; v.gate.material.uniforms.uA.value = w * u.uIntro.value;
  }
  v.renderer.render(v.scene, v.camera);
  v.frames++;
}

// one loop for every view: runs only while a view is on screen
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (still === null && !reduce) time += Math.min(dt, 0.05);
  tilt.x += (tilt.tx - tilt.x) * Math.min(1, dt * 3); tilt.y += (tilt.ty - tilt.y) * Math.min(1, dt * 3);
  let any = false;
  for (const v of views) if (v.visible) { draw(v, dt); any = true; }
  const settled = views.every((v) => !v.visible || v.frames > 3);
  if (still !== null && settled) root.classList.add("scene-still");
  // reduced motion and stills draw a few frames, then wait for the next scroll
  if (any && !document.hidden && (!(reduce || still !== null) || !settled)) requestAnimationFrame(frame);
  else running = false;
}
function wake() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(frame); } }

// views are built as they come near the screen, and drawn only while on it
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    let v = views.find((x) => x.el === e.target);
    if (!v && e.isIntersecting) { v = makeView(e.target); if (!v) { io.unobserve(e.target); continue; } views.push(v); }
    if (v) v.visible = e.isIntersecting;
  }
  wake();
}, { rootMargin: "25% 0px 25% 0px" });
els.forEach((el) => io.observe(el));

addEventListener("resize", () => { VH = innerHeight; wake(); });
addEventListener("scroll", () => { if (reduce) { for (const v of views) v.frames = 0; } wake(); }, { passive: true });
document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
if (finePointer && !reduce) addEventListener("pointermove", (e) => { tilt.tx = e.clientX / innerWidth - 0.5; tilt.ty = e.clientY / innerHeight - 0.5; wake(); }, { passive: true });
root.classList.add("scene-on");
}

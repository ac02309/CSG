/* One shot per stage panel. forms lists the formations the records move through, by stage:
   0 orbit the globe · 1 the line, unsorted · 2 the line through the automated check · 3 static A · 4 static B.
   cameras gives one camera per stage. Panels are framed centrally (shift 0); narrow panels widen the lens.
   visibility gives [fade in from, to, fade out from, to] in stage units.
   scroll: "story" drives the stage from the [data-stage] steps of the enclosing [data-story] section. */
const NEVER = [99, 100, 99, 100];
const ALWAYS = [-2, -1, 99, 100];
const ALWAYS_AFTER = (a, b) => [a, b, 99, 100];
const HIDDEN_GLOBE = [{ pos: [0, 0, 0], scale: 1.2, opacity: 0 }, { pos: [0, 0, 0], scale: 1.2, opacity: 0 }];
const HORIZON = { pos: [30, 3.2, -10], scale: 8, opacity: 0.75 };

const cam = (pos, look, fov = 34) => ({ pos, look, shift: 0, fov });
const GATE = cam([-2.6, 1.0, 2.9], [0.75, 0.22, -0.4]);
const LINE = cam([-7.4, 0.7, 2.4], [3.2, 0.25, -0.8], 38);
const STACKS = cam([3.3, 2.2, 4.6], [0, 0.7, 0]);
const MARK = cam([0, 0.95, 7.4], [0, 0.95, 0]);
const hold = (c) => [c, c];

export const SHOTS = {
  // home: the title panel holds the globe; the story panel plays the rest as you scroll
  hero: {
    forms: [0, 0], rest: 0, globeSpin: 0.05,
    globe: [{ pos: [0, 0, 0], scale: 1.3, opacity: 1 }, { pos: [0, 0, 0], scale: 1.3, opacity: 1 }],
    cameras: hold(cam([0, 0.3, 8.4], [0, 0.02, 0], 34)), dolly: [0, -0.2, -0.9], visibility: {},
  },
  story: {
    forms: [1, 2, 3, 4], scroll: "story", rest: 0,
    statA: { type: "stacks", heights: [1, 2, 3, 4], color: 3 },
    statB: { type: "mark", color: 1, y: 0.95 },
    globe: [HORIZON, { ...HORIZON, opacity: 0.45 }, { ...HORIZON, opacity: 0 }, { ...HORIZON, opacity: 0 }],
    cameras: [LINE, GATE, STACKS, MARK],
    visibility: { grid: [-2, -1, 2.35, 2.85], rails: [-2, -1, 1.35, 1.85], gate: [0.3, 0.85, 1.5, 1.95] },
  },
  flow: {
    forms: [0, 1], intro: true, rest: 1, globe: [{ ...HORIZON, opacity: 0 }, HORIZON],
    cameras: hold(LINE), dolly: [2.2, 0, 0],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: NEVER },
  },
  report: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "stacks", heights: [1, 2, 3, 4], color: 3, errors: "valid" },
    cameras: hold(STACKS), dolly: [-1.2, 0.4, 0.4],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: NEVER, gate: NEVER },
  },
  work: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: hold(GATE), dolly: [1.0, 0.2, 0.5],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  qa: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: hold(cam([-1.7, 0.85, 2.5], [1.0, 0.38, -0.6])), dolly: [0.7, 0.25, 0.35],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  capacity: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "stacks", heights: [1, 1, 1, 1, 1], color: 3, gap: 0.6, errors: "valid" },
    cameras: hold(cam([3.2, 1.9, 4.6], [0, 0.45, 0])), dolly: [-1.2, 0.5, 0.4],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: NEVER, gate: NEVER },
  },
  ai: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "stacks", heights: [6, 3, 5, 2, 4, 3, 5, 2], color: 1, gap: 0.5, errors: "valid" },
    cameras: hold(cam([3.4, 1.8, 5.0], [0, 0.42, 0])), dolly: [-1.4, 0.4, 0.3],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: NEVER, gate: NEVER },
  },
  services: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: hold(cam([-0.4, 1.2, 4.6], [0.4, 0.15, -0.2])), dolly: [-2.6, 0.3, -0.5],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  contact: {
    forms: [0, 0], rest: 0, globeYaw: -1.45, globeSpin: 0.01,
    globe: [{ pos: [0, 0, 0], scale: 1.3, opacity: 1 }, { pos: [0, 0, 0], scale: 1.3, opacity: 1 }],
    cameras: hold(cam([0, 0.35, 7.0], [0, 0.05, 0])), dolly: [0.3, -0.2, 0.6], visibility: {},
  },
  quiet: {
    forms: [0, 1], intro: true, rest: 1, globe: HIDDEN_GLOBE, glow: 0.8,
    cameras: hold(cam([-6.5, 1.7, 3], [5, 0, -1.4], 36)), dolly: [3.2, -0.3, 0],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: NEVER },
  },
  broken: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "broken", color: 2, errors: "valid" },
    cameras: hold(cam([-3.4, 0.9, 3.3], [0.6, -0.35, 0], 36)),
    visibility: { grid: NEVER, rails: NEVER, gate: NEVER },
  },
};
export { ALWAYS };

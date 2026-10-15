/* One shot per page. forms lists the formations the records move through, by stage:
   0 orbit the globe · 1 the line, unsorted · 2 the line through the automated check · 3 static A · 4 static B.
   cameras gives one camera per stage; shift moves the subject right of centre, clear of the text.
   visibility gives [fade in from, to, fade out from, to] in stage units. */
const NEVER = [99, 100, 99, 100];
const ALWAYS_AFTER = (a, b) => [a, b, 99, 100];
const HIDDEN_GLOBE = [{ pos: [0, 0, 0], scale: 1.2, opacity: 0 }, { pos: [0, 0, 0], scale: 1.2, opacity: 0 }];

const GATE_CAM = { pos: [-2.4, 0.95, 2.7], look: [0.9, 0.2, -0.35], shift: 0.17, fov: 34 };

export const SHOTS = {
  home: {
    forms: [0, 1, 2, 3, 4], scroll: "chapters", rest: 0,
    statA: { type: "stacks", heights: [1, 2, 3, 4], color: 3 },
    statB: { type: "mark", color: 1, y: 0.95 },
    globe: [
      { pos: [0, 0, 0], scale: 1.3, opacity: 1 },
      { pos: [30, 3.2, -10], scale: 8, opacity: 0.7 },
      { pos: [30, 3.2, -10], scale: 8, opacity: 0.45 },
      { pos: [30, 3.2, -10], scale: 8, opacity: 0 },
      { pos: [30, 3.2, -10], scale: 8, opacity: 0 },
    ],
    cameras: [
      { pos: [0.2, 0.35, 7.9], look: [0, 0.05, 0], shift: 0.27, fov: 34 },
      { pos: [-7.6, 0.62, 2.3], look: [3, 0.18, -0.6], shift: 0.15, fov: 36 },
      GATE_CAM,
      { pos: [3.1, 2.15, 4.4], look: [0, 0.72, 0], shift: 0.18, fov: 34 },
      { pos: [0, 0.95, 8.6], look: [0, 0.95, 0], shift: 0.28, fov: 34 },
    ],
    visibility: { grid: [0.45, 1, 3.35, 3.85], rails: [0.45, 1, 2.35, 2.85], gate: [1.3, 1.85, 2.5, 2.95] },
  },
  work: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: [GATE_CAM, GATE_CAM], dolly: [1.2, 0.2, 0.6],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  qa: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: [{ pos: [-1.5, 0.8, 2.3], look: [1.3, 0.35, -0.7], shift: 0.2, fov: 34 }, { pos: [-1.5, 0.8, 2.3], look: [1.3, 0.35, -0.7], shift: 0.2, fov: 34 }],
    dolly: [0.8, 0.3, 0.4],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  capacity: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "stacks", heights: [1, 1, 1, 1, 1], color: 3, gap: 0.6, errors: "valid" },
    cameras: [{ pos: [3.2, 1.9, 4.6], look: [0, 0.5, 0], shift: 0.25, fov: 34 }, { pos: [3.2, 1.9, 4.6], look: [0, 0.5, 0], shift: 0.25, fov: 34 }],
    dolly: [-1.4, 0.6, 0.4],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: NEVER, gate: NEVER },
  },
  ai: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "stacks", heights: [6, 3, 5, 2, 4, 3, 5, 2], color: 1, gap: 0.5, errors: "valid" },
    cameras: [{ pos: [3.4, 1.8, 4.9], look: [0, 0.45, 0], shift: 0.25, fov: 34 }, { pos: [3.4, 1.8, 4.9], look: [0, 0.45, 0], shift: 0.25, fov: 34 }],
    dolly: [-1.6, 0.5, 0.3],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: NEVER, gate: NEVER },
  },
  services: {
    forms: [0, 2], intro: true, rest: 1, globe: HIDDEN_GLOBE,
    cameras: [{ pos: [-0.6, 1.15, 4.4], look: [0.5, 0.15, -0.2], shift: 0.18, fov: 34 }, { pos: [-0.6, 1.15, 4.4], look: [0.5, 0.15, -0.2], shift: 0.18, fov: 34 }],
    dolly: [-3, 0.4, -0.6],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: ALWAYS_AFTER(0.4, 0.9) },
  },
  contact: {
    forms: [0, 0], intro: false, rest: 0, globeYaw: -1.45, globeSpin: 0.008,
    globe: [{ pos: [0, 0, 0], scale: 1.3, opacity: 1 }, { pos: [0, 0, 0], scale: 1.3, opacity: 1 }],
    cameras: [{ pos: [0, 0.4, 6.6], look: [0, 0.1, 0], shift: 0.22, fov: 34 }, { pos: [0, 0.4, 6.6], look: [0, 0.1, 0], shift: 0.22, fov: 34 }],
    dolly: [0.4, -0.3, 0.8], visibility: {},
  },
  quiet: {
    forms: [0, 1], intro: true, rest: 1, globe: HIDDEN_GLOBE, glow: 0.75,
    cameras: [{ pos: [-6.5, 1.7, 3], look: [5, 0, -1.4], shift: 0.16, fov: 36 }, { pos: [-6.5, 1.7, 3], look: [5, 0, -1.4], shift: 0.16, fov: 36 }],
    dolly: [3.5, -0.3, 0],
    visibility: { grid: ALWAYS_AFTER(0.2, 0.8), rails: ALWAYS_AFTER(0.2, 0.8), gate: NEVER },
  },
  broken: {
    forms: [0, 3], intro: true, rest: 1, globe: HIDDEN_GLOBE, errors: false,
    statA: { type: "broken", color: 2, errors: "valid" },
    cameras: [{ pos: [-3.4, 0.9, 3.3], look: [0.9, -0.35, 0], shift: 0.15, fov: 36 }, { pos: [-3.4, 0.9, 3.3], look: [0.9, -0.35, 0], shift: 0.15, fov: 36 }],
    visibility: { grid: NEVER, rails: NEVER, gate: NEVER },
  },
};

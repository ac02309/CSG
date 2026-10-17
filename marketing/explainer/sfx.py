"""Sound design for the journey film, synthesised here (owned outright) and placed on the film's own cue list.
Each visual event gets its sound on the same frame. Usage: python3 sfx.py cues.json sfx.wav
Design rules: short, soft-edged transients for 'tactile' clicks (no harsh 2-5 kHz spikes); consonant major
intervals for success; pitch falls for weight and pitch rises for anticipation; a beat of silence before the
big hit; dense repeats are varied in pitch and level so they never sound like a machine gun."""
import sys, json, wave
import numpy as np

SR = 48000
rng = np.random.default_rng(5)
T = lambda d: np.arange(int(d * SR)) / SR

def _unused_lp(x, fc):
    a = np.exp(-2 * np.pi * fc / SR); y = np.empty_like(x); s = 0.0
    for i in range(len(x)): s = (1 - a) * x[i] + a * s; y[i] = s
    return y
def lpf(x, fc):  # fast FFT low-pass for long signals
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= 1 / np.sqrt(1 + (f / fc) ** 4); return np.fft.irfft(X, len(x))
def hpf(x, fc):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR); X *= 1 / np.sqrt(1 + (fc / np.maximum(f, 1)) ** 4); return np.fft.irfft(X, len(x))
def bpf(x, lo, hi): return hpf(lpf(x, hi), lo)
def env(n, a, d, shape=1.0):
    t = np.arange(n) / SR; e = np.minimum(t / max(a, 1e-4), 1) * np.exp(-np.maximum(t - a, 0) / max(d, 1e-4)); return e ** shape
def sine_sweep(f0, f1, d, curve=1.0):
    t = T(d); k = (t / d) ** curve; f = f0 * (f1 / f0) ** k; return np.sin(2 * np.pi * np.cumsum(f) / SR)
def noise(d): return rng.standard_normal(int(d * SR))
def bell(f, d, bright=1.0):
    t = T(d); x = np.zeros_like(t)
    for m, g, dec in [(1, 1, 1.2), (2.0, .35 * bright, .5), (3.0, .12 * bright, .3), (4.2, .06 * bright, .2)]:
        x += g * np.sin(2 * np.pi * f * m * t) * np.exp(-t / (dec * d / 1.6))
    return x * np.minimum(t / .004, 1)
def hz(m): return 440 * 2 ** ((m - 69) / 12)
def at(sig, off, n):  # sig placed at off seconds inside n samples
    o = int(off * SR); out = np.zeros(n); m = min(len(sig), n - o)
    if m > 0: out[o:o + m] = sig[:m]
    return out
def norm(x, peak=1.0): return x / (np.abs(x).max() + 1e-9) * peak

# ---------- the sounds ----------
def s_tick():   # a cell hop: soft keyboard-cursor tick
    n = noise(.03); x = bpf(n, 1500, 5000) * env(len(n), .0005, .006) + .5 * np.sin(2 * np.pi * 1900 * T(.03)) * env(len(n), .0005, .004)
    return norm(x, .5)
def s_blip(pitch=0):  # a value copied: a tiny rising pluck
    d = .09; x = sine_sweep(hz(84 + pitch) * .9, hz(84 + pitch), d, .3) * env(int(d * SR), .002, .025); return norm(x, .5)
def s_drop():   # it lands in the other cell
    d = .06; x = sine_sweep(900, 420, d) * env(int(d * SR), .001, .015) + bpf(noise(d), 800, 3000) * env(int(d * SR), .0005, .004) * .4; return norm(x, .5)
def s_flip():   # the clock flips to 09:00
    n = int(.12 * SR); return at(s_drop() * .7, 0, n) + at(s_tick(), .05, n)
def s_whoosh(d=.5, f0=500, f1=3500, rev=False):
    n = noise(d); t = T(d); k = t / d
    lo = f0 * (f1 / f0) ** k; out = np.zeros_like(n)
    # a moving band: crossfade of fixed bands is cheap and smooth
    bands = [(f0 * (f1 / f0) ** q, f0 * (f1 / f0) ** q * 2.2) for q in np.linspace(0, 1, 6)]
    for i, (a, b) in enumerate(bands):
        w = np.exp(-((k - i / 5) ** 2) / .03); out += bpf(n, a, b) * w
    e = np.sin(np.pi * k) ** 1.6; x = out * e
    return norm(x[::-1] if rev else x, .8)
def s_whooshlong(): return s_whoosh(.9, 250, 2500)
def s_rewind():  # tape-stop dive plus a reversed whoosh
    d = .75; x = sine_sweep(520, 55, d, .6) * env(int(d * SR), .005, .4) * .6 + s_whoosh(d, 300, 3000, rev=True) * .7; return norm(x, .9)
def s_impact():
    d = 1.2; t = T(d); f = 38 + 50 * np.exp(-t * 14); x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 4) + lpf(noise(d), 1200) * np.exp(-t * 18) * .5; return norm(x, 1)
def s_stamp(bad=False):  # rubber stamp: a weighty thump and a paper slap
    d = .35; t = T(d); body = np.sin(2 * np.pi * np.cumsum(110 + 60 * np.exp(-t * 40)) / SR) * np.exp(-t * 22)
    slap = bpf(noise(d), 600, 4000) * np.exp(-t * 55) * .7
    x = body + slap
    if bad: x += .35 * np.sin(2 * np.pi * hz(52) * t) * np.exp(-t * 6) + .25 * np.sin(2 * np.pi * hz(53) * t) * np.exp(-t * 6)  # a sour minor second under it
    return norm(x, 1)
def s_pop():
    d = .14; t = T(d); x = sine_sweep(240, 900, d, .4) * env(len(t), .001, .03) + bpf(noise(d), 1000, 5000) * env(len(t), .0003, .003) * .3; return norm(x, .8)
def s_key():  # a single keystroke
    d = .05; t = T(d); x = bpf(noise(d), 900, 4500) * env(len(t), .0004, .008) + np.sin(2 * np.pi * (300 + rng.uniform(-30, 30)) * t) * env(len(t), .0004, .01) * .5; return norm(x, .55)
def s_glitch():  # the digit goes wrong: sample-and-hold buzz bursts
    d = .38; t = T(d); x = np.zeros_like(t)
    for i in range(7):
        a = int(rng.uniform(0, d - .05) * SR); L = int(rng.uniform(.015, .05) * SR); f = rng.choice([180, 360, 720, 1440])
        seg = np.sign(np.sin(2 * np.pi * f * np.arange(L) / SR)); seg = np.repeat(seg[::7], 7)[:L]; x[a:a + L] += seg * rng.uniform(.4, 1)
    x = lpf(x, 6000) + sine_sweep(1200, 300, d) * .2 * np.exp(-t * 6); return norm(x, .9)
def s_thud():   # the wrong invoice lands
    d = .7; t = T(d); x = np.sin(2 * np.pi * np.cumsum(70 + 80 * np.exp(-t * 25)) / SR) * np.exp(-t * 6) + bpf(noise(d), 200, 1500) * np.exp(-t * 30) * .5; return norm(x, 1)
def s_alarm():  # a soft but unmistakable two-tone alert
    a = bell(hz(76), .25, .4) * .7; b = bell(hz(72), .35, .4); return norm(np.concatenate([a[:int(.12 * SR)], b]), .8)
def s_riser():  # 1.3 s of rising tension that stops dead 60 ms before the hit
    d = 1.24; t = T(d); k = t / d
    tone = sum(np.sin(2 * np.pi * np.cumsum(f0 * 2 ** (2.2 * k ** 1.7)) / SR) for f0 in (110, 165, 220)) / 3
    trem = .6 + .4 * np.sin(2 * np.pi * np.cumsum(4 + 20 * k ** 2) / SR)
    x = (tone * .6 + hpf(noise(d), 2000) * k ** 2 * .5) * k ** 2.2 * trem
    return norm(np.concatenate([x, np.zeros(int(.06 * SR))]), .9)
def s_suck():   # a reversed swell into the hit
    d = .6; t = T(d); x = hpf(noise(d), 1500) * (t / d) ** 3; return norm(x, .7)
def s_hit():    # the brand reveal: sub boom, a bright transient and a wide chord
    d = 3.6; t = T(d); boom = np.sin(2 * np.pi * np.cumsum(30 + 60 * np.exp(-t * 9)) / SR) * np.exp(-t * 1.6)
    crack = bpf(noise(d), 1500, 9000) * np.exp(-t * 40) * .6
    chord = sum(bell(hz(m), d, .7) * g for m, g in [(60, .5), (67, .4), (72, .35), (76, .3), (79, .2)])
    return norm(boom * 1.0 + crack + chord * .5, 1)
def s_shimmer():
    d = 3.0; t = T(d); x = sum(np.sin(2 * np.pi * hz(m) * t + rng.uniform(0, 6)) for m in (88, 91, 95, 96, 100)) * np.exp(-t * 1.2) * np.minimum(t / .05, 1) * (.6 + .4 * np.sin(2 * np.pi * 7 * t))
    return norm(x, .6)
def s_grain():  # a particle settles into the ring
    d = .05; x = bell(hz(rng.choice([84, 88, 91, 96])), d, .2); return norm(x, .3)
def s_settle(): return norm(s_whoosh(.5, 1500, 300) * .6 + at(s_pop() * .6, .35, int(.5 * SR)), .8)
def s_zip():    # the record whips along the road
    d = .42; t = T(d); x = sine_sweep(300, 1400, d, .5) * np.sin(np.pi * t / d) ** 2 * .35 + s_whoosh(d, 700, 5000) * .8; return norm(x, .8)
def s_arrive():  # it docks at a system: a satisfying soft 'thock' and a short chime
    d = .3; t = T(d); x = np.sin(2 * np.pi * np.cumsum(180 + 120 * np.exp(-t * 60)) / SR) * np.exp(-t * 25) + bell(hz(81), d, .5)[:len(t)] * .25; return norm(x, .8)
def s_scan():
    d = 1.4; t = T(d); x = np.sin(2 * np.pi * np.cumsum(600 + 1400 * (t / d)) / SR) * .18 + bpf(noise(d), 3000, 8000) * .12 * (.5 + .5 * np.sin(2 * np.pi * 12 * t)); x *= np.sin(np.pi * t / d); return norm(x, .5)
def s_catch():  # the scanner finds the typo: a tight 'clack'
    d = .25; t = T(d); x = sine_sweep(1400, 700, d) * np.exp(-t * 30) + bpf(noise(d), 1200, 6000) * np.exp(-t * 80) * .6; return norm(x, .9)
def s_success():  # a major arpeggio, bright and quick: the moment the typo is fixed
    d = 1.4; out = np.zeros(int(d * SR))
    for i, m in enumerate((72, 76, 79, 84)):
        b = bell(hz(m), d - i * .07, .8); a = int(i * .07 * SR); out[a:a + len(b)] += b * (1 - i * .1)
    return norm(out, .9)
def s_send():
    return norm(s_whoosh(.45, 900, 6000) * .7 + at(bell(hz(88), .4, .3), .3, int(.45 * SR)) * .4, .7)
def s_slide():
    d = .45; t = T(d); x = bpf(noise(d), 300, 2500) * np.sin(np.pi * t / d) ** 2 * .6 + at(s_tick(), .38, len(t)) * .6; return norm(x, .6)
def s_sort():
    out = np.zeros(int(1.2 * SR))
    for i in range(9): p = s_blip(rng.choice([0, 3, 7])); a = int(i * .11 * SR); out[a:a + len(p)] += p * .7
    return norm(out, .6)
def s_check():
    d = .22; out = np.zeros(int(d * SR)); a = bell(hz(84), .12, .4); b = bell(hz(91), .18, .4); out[:len(a)] += a; out += at(b, .05, len(out)); return norm(out, .6)
def s_deliver():  # it reaches the customer, correct: a warm low pop and a perfect-fifth chime
    d = 1.6; t = T(d); x = np.sin(2 * np.pi * np.cumsum(90 + 150 * np.exp(-t * 30)) / SR) * np.exp(-t * 8) * .8
    x[:] += at(bell(hz(79), 1.4, .6) * .45 + bell(hz(86), 1.4, .6) * .35, .05, len(t)); return norm(x, .95)
def s_slam():   # a proof figure slams in
    d = 1.0; t = T(d); x = np.sin(2 * np.pi * np.cumsum(45 + 70 * np.exp(-t * 18)) / SR) * np.exp(-t * 3.5) + bpf(noise(d), 400, 4000) * np.exp(-t * 35) * .7; return norm(x, 1)
def s_tickroll():  # the odometer spinning to a stop
    d = 1.1; out = np.zeros(int(d * SR)); tt = 0.0; gap = .025
    while tt < d - .05: a = int(tt * SR); k = s_tick() * (1 - tt / d) ** .5; out[a:a + len(k)] += k[:len(out) - a]; tt += gap; gap *= 1.09
    return norm(out, .6)
def s_catchtick(): return norm(bell(hz(rng.choice([88, 91, 93, 96])), .08, .2), .4)
def s_tock(): return norm(np.sin(2 * np.pi * hz(rng.choice([72, 76, 79])) * T(.08)) * env(int(.08 * SR), .001, .02), .4)
def s_dock(): return norm(s_arrive() * .8 + at(s_pop(), .02, int(.3 * SR)) * .4, .9)
def s_dialtick(): return norm(np.sin(2 * np.pi * 2400 * T(.02)) * env(int(.02 * SR), .0005, .004) + bpf(noise(.02), 2000, 7000) * env(int(.02 * SR), .0003, .002) * .5, .45)
def s_pen():  # a fountain-pen signature: scratchy, rhythmic
    d = .75; t = T(d); m = .5 + .5 * np.abs(np.sin(2 * np.pi * 7 * t)); x = bpf(noise(d), 2500, 7000) * m * np.sin(np.pi * t / d) * .5; return norm(x, .45)
def s_switch():  # a crisp physical toggle
    d = .12; out = np.zeros(int(d * SR)); a = s_tick() * .9; b = s_drop() * .7; out[:len(a)] += a; o = int(.045 * SR); out[o:o + len(b)] += b[:len(out) - o]; return norm(out, .9)
def s_yes():    # the 'yes': a rising fifth into an octave, the most resolved sound in the film
    d = 2.0; out = np.zeros(int(d * SR))
    for i, (m, g) in enumerate([(67, .8), (74, .8), (79, .9), (86, .5)]):
        b = bell(hz(m), d - i * .06, .9) * g; a = int(i * .06 * SR); out[a:a + len(b)] += b
    return norm(out, .95)
def s_resolve():
    d = 4.5; t = T(d); x = sum(bell(hz(m), d, .5) * g for m, g in [(48, .4), (55, .35), (60, .4), (64, .3), (67, .25), (72, .2)]); return norm(x * np.minimum(t / .02, 1), .8)

GEN = {k[2:]: v for k, v in globals().items() if k.startswith('s_')}
GEN['stampbad'] = lambda: s_stamp(True)
LEVEL = {  # dB under full scale per kind: heroes sit level with the music, textures 10-15 dB under it
    'tick': -14, 'blip': -18, 'drop': -20, 'flip': -12, 'whoosh': -10, 'whooshlong': -10, 'rewind': -11, 'impact': -9, 'stamp': -5, 'stampbad': -4,
    'pop': -11, 'key': -14, 'glitch': -9, 'thud': -6, 'alarm': -11, 'riser': -8, 'suck': -11, 'hit': -3, 'shimmer': -13, 'grain': -22,
    'settle': -11, 'zip': -10, 'arrive': -10, 'scan': -14, 'catch': -6, 'success': -6, 'send': -11, 'slide': -12, 'sort': -14, 'check': -13,
    'deliver': -8, 'slam': -4, 'tickroll': -12, 'catchtick': -22, 'tock': -22, 'dock': -8, 'dialtick': -14, 'pen': -12, 'switch': -6, 'yes': -7, 'resolve': -10,
}

def place(buf, sig, at, gain, pan):
    if sig.ndim == 1: sig = np.vstack([sig * np.sqrt((1 - pan) / 2), sig * np.sqrt((1 + pan) / 2)])
    a = int(at * SR); b = min(buf.shape[1], a + sig.shape[1])
    if b > a >= 0: buf[:, a:b] += sig[:, :b - a] * gain

if __name__ == '__main__':
    cues = json.load(open(sys.argv[1])); total = 63.2
    out = np.zeros((2, int(total * SR)))
    cache = {}
    for c in cues:
        k = c['k']
        # dense textures are regenerated each time so no two are identical; one-offs are cached
        if k in ('blip', 'catchtick', 'tock', 'grain', 'key', 'tick') or k not in cache:
            sig = GEN[k](rng.integers(-2, 5)) if k == 'blip' else GEN[k]()
            if k not in ('blip', 'catchtick', 'tock', 'grain', 'key', 'tick'): cache[k] = sig
        else: sig = cache[k]
        g = 10 ** ((LEVEL.get(k, -20) + rng.uniform(-1.5, 1.5)) / 20) * c.get('g', 1)
        place(out, sig, c['t'], g, float(np.clip(c.get('p', 0), -.8, .8)))
    out = np.tanh(out * 1.2) / 1.2   # gentle glue
    pcm = (np.clip(out, -1, 1).T * 32767).astype('<i2')
    with wave.open(sys.argv[2], 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
    print('wrote', sys.argv[2], len(cues), 'cues')

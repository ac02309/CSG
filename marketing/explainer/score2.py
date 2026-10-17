"""Driving, premium score for the explainer (owned outright: synthesised here). Felt piano and pads from
score.py, at 112 BPM with a pulse from the first bars, a swell into the proof, a near-silent stop for
"This isn't theory.", a hit on each proof figure, and a resolve on the closing line.
Usage: python3 score2.py timeline.json out.wav"""
import sys, json, wave
import numpy as np
import score as S

SR = S.SR
BPM = 112.0; BEAT = 60 / BPM; BAR = 4 * BEAT
rng = np.random.default_rng(21)

def snap():
    n = int(0.18 * SR); t = np.arange(n) / SR
    x = S.highpass(rng.standard_normal(n), 1800) * np.exp(-t * 38)
    body = np.sin(2 * np.pi * 210 * t) * np.exp(-t * 60) * 0.4
    return (x * 0.07 + body * 0.05)

def boom():
    n = int(1.6 * SR); t = np.arange(n) / SR
    f = 44 + 30 * np.exp(-t * 9)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 2.6) * 0.32

def swell(d):
    n = int(d * SR); t = np.arange(n) / SR
    w = rng.standard_normal(n); k = t / d
    x = (S.lowpass(w, 1500) * (1 - k) + S.lowpass(w, 8000) * k) * k ** 2.4 * 0.05   # it brightens as it rises
    return np.vstack([x, x])

def compose(tl):
    total = tl['total']; sc = {s['id']: s for s in tl['scenes']}
    full_at = sc['who']['lines'][0]['start']
    pr = sc['proof']; stop0, stop1 = pr['lines'][0]['start'] - 0.25, pr['lines'][1]['start'] - 0.05
    hits = [l['start'] - 0.04 for l in pr['lines'][1:]]
    lift0, lift1 = pr['lines'][1]['start'], sc['how']['start']
    resolve = sc['end']['lines'][0]['start'] - 0.06
    n = int((total + 0.5) * SR); mix = np.zeros((2, n))
    bars = int(np.ceil(resolve / BAR)); start = resolve - bars * BAR
    for b in range(bars):
        t0 = start + b * BAR
        if t0 + BAR < 0: continue
        bass, low, high = S.CHORDS[b % 4]
        lifted = lift0 - BAR <= t0 < lift1
        full = t0 >= full_at - BAR / 2
        S.place(mix, S.pad(low, BAR, 1.6 if lifted else 1.15), t0, 1.3 if lifted else 1.0)
        S.place(mix, S.sub(bass, BAR * 0.95), t0, 1.0 if full else 0.6)
        for i, m in enumerate(low):
            S.place(mix, S.piano(m, 0.5 + rng.uniform(-.05, .05), BAR * 0.8), t0 + i * 0.01, 1, -0.2 + i * 0.12)
        steps = 16 if full else 8
        for s in range(steps):
            idx = [0, 2, 1, 3][s % 4]
            m = high[idx] + (12 if (lifted and s % 4 == 2) else 0)
            at = t0 + s * BAR / steps + rng.uniform(-0.006, 0.006)
            v = (0.38 if s % 4 == 0 else 0.26) + rng.uniform(-.04, .04)
            S.place(mix, S.piano(m, v, BEAT * 0.6), at, 1, -0.35 + 0.7 * idx / 3)
        for q in range(4):                       # pulse: soft kick on every beat once full, on 1 and 3 before
            if full or q in (0, 2):
                S.place(mix, S.thump(), t0 + q * BEAT, 1.0 if lifted else 0.85)
            if full and q in (1, 3):
                S.place(mix, snap(), t0 + q * BEAT, 1.0, 0.1)
            for e in range(2):
                S.place(mix, S.shaker(), t0 + q * BEAT + e * BEAT / 2 + rng.uniform(-.004, .004), (1.1 if e else 0.6) * (1.3 if full else 0.8), 0.35)
    # the swell into the proof, the stop, then a hit on each figure
    sw = swell(min(2 * BAR, stop0)); S.place(mix, sw, stop0 - sw.shape[1] / SR, 1)
    a, b = int(stop0 * SR), int(stop1 * SR)
    ramp = int(0.12 * SR)
    mix[:, a:a + ramp] *= np.linspace(1, 0.06, ramp); mix[:, a + ramp:b] *= 0.06
    for h in hits:
        S.place(mix, np.vstack([boom(), boom()]), h, 1)
        bass, low, high = S.CHORDS[0]
        for i, m in enumerate(low + [high[0]]):
            S.place(mix, S.piano(m, 0.62, 1.2), h + i * 0.012, 1, -0.3 + 0.15 * i)
    # resolve
    ring = total - resolve; bass, low, high = S.FINAL
    S.place(mix, np.vstack([boom(), boom()]), resolve, 1.1)
    S.place(mix, S.sub(bass, min(ring, 4.0)), resolve, 1.1)
    S.place(mix, S.pad(low + [74], ring, 1.4), resolve - 0.4, 1.4)
    for i, m in enumerate(low + high):
        S.place(mix, S.piano(m, 0.55, ring), resolve + i * 0.025, 0.9, -0.4 + 0.08 * i)
    mix = S.reverb(mix, 2.2, 0.24)
    mix[0] = S.highpass(mix[0], 40); mix[1] = S.highpass(mix[1], 40)
    fi = int(0.4 * SR); mix[:, :fi] *= np.linspace(0, 1, fi)
    end = int(total * SR); fo = int(min(2.5, ring) * SR)
    mix[:, end - fo:end] *= np.linspace(1, 0, fo) ** 2
    mix = mix[:, :end]; mix /= np.abs(mix).max() + 1e-9
    return mix * 0.89

if __name__ == '__main__':
    tl = json.load(open(sys.argv[1])); x = compose(tl)
    pcm = (np.clip(x, -1, 1).T * 32767).astype('<i2')
    with wave.open(sys.argv[2], 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
    print('wrote', sys.argv[2], round(x.shape[1] / SR, 2), 's')

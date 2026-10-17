"""Calm, premium score for the explainer, synthesised here so the business owns it outright.
Felt piano, warm pad, soft sub and a quiet pulse, in a room reverb. The arc follows timeline.json:
piano alone for the problem, a pulse from 'who we are', a lift for the proof, a resolve on the logo.

Usage: python3 score.py timeline.json out.wav
"""
import sys, json, wave
import numpy as np

SR = 44100
BPM = 96.0
BEAT = 60 / BPM
BAR = 4 * BEAT
rng = np.random.default_rng(11)

def hz(m): return 440 * 2 ** ((m - 69) / 12)

def lowpass(x, fc):
    """Zero-phase-ish lowpass in the frequency domain (fast, smooth roll-off)."""
    n = len(x); X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1 / SR)
    X *= 1 / np.sqrt(1 + (f / fc) ** 4)
    return np.fft.irfft(X, n)

def highpass(x, fc):
    n = len(x); X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1 / SR)
    X *= 1 / np.sqrt(1 + (fc / np.maximum(f, 1e-3)) ** 4)
    return np.fft.irfft(X, n)

def piano(m, vel, dur):
    """Felt piano: slightly stretched partials, the high ones dying first, a soft hammer."""
    n = int((dur + 2.5) * SR); t = np.arange(n) / SR
    f0 = hz(m); B = 0.00035; x = np.zeros(n)
    for k in range(1, 10):
        fk = k * f0 * np.sqrt(1 + B * k * k)
        if fk > 7000: break
        amp = vel / k ** 1.35 * (0.6 if k == 2 else 1)
        dec = 0.9 + 0.55 * k + f0 / 600
        x += amp * np.sin(2 * np.pi * fk * t + rng.uniform(0, 6.28)) * np.exp(-t * dec)
    x *= np.minimum(1, t / 0.006)
    rel = int(dur * SR)                       # damper: a soft release after the held length
    if rel < n: x[rel:] *= np.exp(-np.arange(n - rel) / SR * 6)
    ham = rng.standard_normal(int(0.03 * SR)) * np.exp(-np.arange(int(0.03 * SR)) / SR * 140) * 0.02 * vel
    x[: len(ham)] += ham
    return x * 0.16

def pad(notes, dur, bright=1.0):
    n = int((dur + 1.5) * SR); t = np.arange(n) / SR
    L = np.zeros(n); R = np.zeros(n)
    for m in notes:
        f = hz(m)
        for det, side in ((0.997, 0), (1.003, 1), (1.0, 2)):
            w = np.zeros(n)
            for k in range(1, 7):
                w += np.sin(2 * np.pi * f * det * k * t + rng.uniform(0, 6.28)) / k ** 1.8
            if side == 0: L += w
            elif side == 1: R += w
            else: L += w * 0.5; R += w * 0.5
    a = int(1.2 * SR); r = int(1.4 * SR)
    e = np.ones(n); e[:a] = np.linspace(0, 1, a) ** 2; e[-r:] = np.linspace(1, 0, r) ** 2
    L, R = lowpass(L * e, 1400 * bright), lowpass(R * e, 1400 * bright)
    return np.vstack([L, R]) * 0.018

def sub(m, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    e = np.minimum(1, t / 0.03) * np.minimum(1, (dur - t) / 0.15)
    return np.sin(2 * np.pi * hz(m) * t) * e * 0.07

def thump():
    n = int(0.35 * SR); t = np.arange(n) / SR
    f = 52 + 40 * np.exp(-t * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9) * 0.13

def shaker():
    n = int(0.09 * SR); t = np.arange(n) / SR
    x = highpass(rng.standard_normal(n), 5500)
    return x * np.minimum(1, t / 0.012) * np.exp(-t * 45) * 0.035

def reverb(x, secs=2.6, mix=0.28):
    n = int(secs * SR); t = np.arange(n) / SR
    out = []
    for ch in range(2):
        ir = rng.standard_normal(n) * np.exp(-t * 6.9 / secs)
        ir = lowpass(ir, 5000); ir[: int(0.012 * SR)] = 0; ir /= np.sqrt((ir ** 2).sum())
        L = len(x[ch]) + n; size = 1 << int(np.ceil(np.log2(L)))
        wet = np.fft.irfft(np.fft.rfft(x[ch], size) * np.fft.rfft(ir, size), size)[: len(x[ch])]
        out.append(x[ch] * (1 - mix) + wet * mix * 3.2)
    return np.vstack(out)

def place(buf, sig, at, gain=1.0, pan=0.0):
    i = int(round(at * SR))
    if sig.ndim == 1:
        sig = np.vstack([sig * np.sqrt(0.5 * (1 - pan)), sig * np.sqrt(0.5 * (1 + pan))])
    if i < 0: sig = sig[:, -i:]; i = 0
    j = min(buf.shape[1], i + sig.shape[1])
    if j > i: buf[:, i:j] += gain * sig[:, : j - i]

# D major: Dmaj9  Bm7(11)  Gmaj9  A6sus4, voiced close and warm
CHORDS = [
    (38, [54, 57, 61, 64], [66, 69, 73, 76]),
    (35, [50, 54, 57, 64], [62, 66, 69, 74]),
    (31, [47, 54, 57, 62], [62, 66, 71, 74]),
    (33, [50, 52, 54, 59], [61, 64, 66, 69]),
]
FINAL = (38, [50, 54, 57, 61, 64], [66, 69, 73, 78])

def compose(tl):
    total = tl['total']; sc = {s['id']: s for s in tl['scenes']}
    pulse_at, lift_at, lift_end = sc['who']['start'], sc['proof']['start'], sc['how']['start']
    hit = sc['end']['lines'][0]['start'] - 0.05          # the resolve lands as the brand name is spoken
    n = int((total + 0.5) * SR); mix = np.zeros((2, n))
    bars = int(np.ceil(hit / BAR)); start = hit - bars * BAR   # bar lines aligned so the resolve is a downbeat
    for b in range(bars):
        t0 = start + b * BAR
        if t0 + BAR < 0: continue
        bass, low, high = CHORDS[b % 4]
        mid = t0 + BAR / 2
        lifted = lift_at <= t0 < lift_end
        place(mix, pad(low, BAR, 1.4 if lifted else 1.0), t0, 1.25 if lifted else 1.0)
        if t0 >= pulse_at - 0.01:
            place(mix, sub(bass, BAR * 0.95), t0, 1.0, 0)
        # piano: the chord on the bar, then a slow broken pattern in eighths, humanised
        for i, m in enumerate(low):
            place(mix, piano(m, 0.55 + rng.uniform(-.06, .06), BAR * 0.9), t0 + i * 0.012 + rng.uniform(0, .006), 1, -0.2 + i * 0.12)
        pattern = [0, 2, 1, 3, 2, 1, 3, 2] if b % 2 == 0 else [0, 1, 2, 3, 2, 3, 1, 2]
        dense = t0 >= pulse_at - 0.01
        for s, idx in enumerate(pattern):
            if not dense and s % 2: continue
            m = high[idx] - (12 if not dense else 0)
            at = t0 + s * BEAT / 2 + rng.uniform(-0.008, 0.008)
            v = (0.42 if s % 2 == 0 else 0.3) + rng.uniform(-.05, .05)
            place(mix, piano(m, v, BEAT * 0.9), at, 1, -0.3 + 0.6 * (idx / 3))
        if dense:                                   # the quiet pulse: soft thump on 1 and 3, shaker in eighths
            for q in (0, 2):
                place(mix, thump(), t0 + q * BEAT, 0.9 if lifted else 0.7)
            for s in range(8):
                place(mix, shaker(), t0 + s * BEAT / 2 + rng.uniform(-.004, .004), (1.0 if s % 2 else 0.6) * (1.2 if lifted else 1), 0.35)
    # the resolve: full chord, low D, a final high note, then a long ring
    ring = total - hit
    bass, low, high = FINAL
    place(mix, sub(bass, min(ring, 4.0)), hit, 1.1)
    place(mix, pad(low + [74], ring, 1.2), hit - 0.6, 1.3)
    for i, m in enumerate(low + high):
        place(mix, piano(m, 0.5 + 0.04 * (i % 3), ring), hit + i * 0.03, 0.9, -0.4 + 0.08 * i)
    mix = reverb(mix)
    mix[0] = highpass(mix[0], 42); mix[1] = highpass(mix[1], 42)
    fi = int(1.0 * SR); mix[:, :fi] *= np.linspace(0, 1, fi) ** 2
    fo = int(min(3.0, ring) * SR); end = int(total * SR); mix[:, end - fo:end] *= np.linspace(1, 0, fo) ** 2; mix[:, end:] = 0
    mix /= np.abs(mix).max() + 1e-9
    return mix[:, :end] * 0.89

if __name__ == '__main__':
    tl = json.load(open(sys.argv[1])); x = compose(tl)
    pcm = (np.clip(x, -1, 1).T * 32767).astype('<i2')
    with wave.open(sys.argv[2], 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
    print('wrote', sys.argv[2], round(x.shape[1] / SR, 2), 's')

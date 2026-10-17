"""Makes a synthetic voice sound recorded: a small treated room, a steady room tone under everything,
and a soft breath before each sentence group, the way a real read sounds through a good microphone.
Usage: python3 voice_fx.py voice.wav timeline.json out.wav"""
import sys, json
import numpy as np, soundfile as sf

SR = 48000
x, sr = sf.read(sys.argv[1])
tl = json.load(open(sys.argv[2]))
# resample 24k -> 48k (band-limited, via FFT)
n = int(len(x) * SR / sr)
X = np.fft.rfft(x); y = np.fft.irfft(X, n) * (SR / sr)
rng = np.random.default_rng(5)

def lowpass(s, fc):
    S = np.fft.rfft(s); f = np.fft.rfftfreq(len(s), 1 / SR); S *= 1 / np.sqrt(1 + (f / fc) ** 4); return np.fft.irfft(S, len(s))

def bandpass(s, lo, hi):
    S = np.fft.rfft(s); f = np.fft.rfftfreq(len(s), 1 / SR)
    S *= 1 / np.sqrt(1 + (f / hi) ** 4) / np.sqrt(1 + (lo / np.maximum(f, 1)) ** 4); return np.fft.irfft(S, len(s))

# soft breaths: a quiet, short inhale before the first line of each scene and before longer lines
breath_at = []
for sc in tl['scenes']:
    for i, l in enumerate(sc['lines']):
        if i == 0 or (l['end'] - l['start']) > 3.2:
            breath_at.append(l['start'] - 0.42)
for t in breath_at:
    d = 0.34; m = int(d * SR); tt = np.arange(m) / SR
    b = bandpass(rng.standard_normal(m), 400, 3200) * np.sin(np.pi * tt / d) ** 1.6 * 0.006
    i = int(t * SR)
    if i > 0: y[i:i + m] += b[: len(y[i:i + m])]

# a small treated room: early reflections plus a short, dark tail (about 0.35 s)
ir_n = int(0.38 * SR); t = np.arange(ir_n) / SR
ir = rng.standard_normal(ir_n) * np.exp(-t * 18); ir = lowpass(ir, 3800)
for d, g in ((0.007, .5), (0.011, .38), (0.017, .3), (0.023, .22)):
    ir[int(d * SR)] += g
ir[:int(0.004 * SR)] = 0; ir /= np.sqrt((ir ** 2).sum())
size = 1 << int(np.ceil(np.log2(len(y) + ir_n)))
wet = np.fft.irfft(np.fft.rfft(y, size) * np.fft.rfft(ir, size), size)[: len(y)]
y = y * 0.9 + wet * 0.16

# room tone: very quiet, warm noise under the whole read
tone = lowpass(rng.standard_normal(len(y)), 1800) * 10 ** (-66 / 20) * 3
y = y + tone
y /= np.abs(y).max() + 1e-9
sf.write(sys.argv[3], (y * 0.89).astype(np.float32), SR)
print('wrote', sys.argv[3], round(len(y) / SR, 2), 's,', len(breath_at), 'breaths')

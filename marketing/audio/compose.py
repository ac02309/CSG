"""Original music for the Clarke Systems Group films. Every sound is synthesised here, so the
track is wholly owned: no samples, no stock library, no licence to track.

Usage: python3 compose.py <seconds> <hit_seconds> <out.wav>
  seconds      total length
  hit_seconds  where the closing chord lands (the end card), the track rings out after it
"""
import sys, wave
import numpy as np

SR = 44100
BPM = 120.0
BEAT = 60.0 / BPM
BAR = 4 * BEAT
rng = np.random.default_rng(7)

def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)

def env_adsr(n, a, d, s, r, sus_len):
    a, d, r = int(a * SR), int(d * SR), int(r * SR)
    sus = max(0, int(sus_len * SR) - a - d)
    e = np.concatenate([np.linspace(0, 1, max(a, 1)), np.linspace(1, s, max(d, 1)), np.full(sus, s), np.linspace(s, 0, max(r, 1))])
    out = np.zeros(n)
    m = min(n, len(e))
    out[:m] = e[:m]
    return out

def saw(freq, t, cutoff=6000.0):
    """Band-limited saw by additive synthesis, harmonics rolled off above the cutoff."""
    out = np.zeros_like(t)
    k = 1
    while k * freq < min(cutoff * 1.6, SR / 2.2):
        g = 1.0 / k * (1.0 if k * freq < cutoff else np.exp(-(k * freq - cutoff) / (cutoff * 0.25)))
        out += g * np.sin(2 * np.pi * k * freq * t)
        k += 1
    return out * 0.55

def onepole_lp(x, fc):
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.empty_like(x)
    acc = 0.0
    for i in range(len(x)):
        acc = (1 - a) * x[i] + a * acc
        y[i] = acc
    return y

def hp(x, fc):
    return x - onepole_lp(x, fc)

def place(buf, sig, start, gain=1.0):
    i = int(round(start * SR))
    if i < 0:                      # a note that began before the video: keep only its tail
        sig = sig[..., -i:]
        i = 0
    if i >= buf.shape[-1] or sig.shape[-1] == 0:
        return
    j = min(buf.shape[-1], i + sig.shape[-1])
    buf[..., i:j] += gain * sig[..., : j - i]

# ---------- instruments ----------
def kick():
    n = int(0.45 * SR); t = np.arange(n) / SR
    f = 46 + 110 * np.exp(-t * 32)
    ph = 2 * np.pi * np.cumsum(f) / SR
    body = np.sin(ph) * np.exp(-t * 7.5)
    click = rng.standard_normal(n) * np.exp(-t * 400) * 0.25
    return np.tanh(1.3 * (body + click)) * 0.5

def clap():
    n = int(0.32 * SR); t = np.arange(n) / SR
    noise = hp(rng.standard_normal(n), 900)
    e = np.zeros(n)
    for off in (0.0, 0.011, 0.022):  # three hand claps, slightly apart
        k = int(off * SR)
        e[k:] += np.exp(-(t[: n - k]) * 55)
    tail = np.exp(-t * 14) * 0.35
    return noise * (e * 0.6 + tail) * 0.42

def hat(open_=False):
    n = int((0.22 if open_ else 0.06) * SR); t = np.arange(n) / SR
    x = hp(hp(rng.standard_normal(n), 6000), 7000)
    return x * np.exp(-t * (14 if open_ else 70)) * (0.16 if open_ else 0.13)

def bass_note(note, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    f = midi(note)
    x = saw(f, t, cutoff=900) * 0.7 + np.sin(2 * np.pi * f * t) * 0.6
    return hp(x, 45) * env_adsr(n, 0.004, 0.08, 0.65, 0.04, dur - 0.04) * 0.28

def pad_chord(notes, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    L = np.zeros(n); R = np.zeros(n)
    for nt in notes:
        f = midi(nt)
        L += saw(f * 0.9965, t, cutoff=2600) + saw(f * 1.0021, t, cutoff=2600) * 0.6
        R += saw(f * 1.0035, t, cutoff=2600) + saw(f * 0.9982, t, cutoff=2600) * 0.6
    e = env_adsr(n, 0.25, 0.4, 0.75, 0.5, dur - 0.5)
    return np.vstack([L * e, R * e]) * 0.07

def pluck(note, dur=0.35):
    n = int(dur * SR); t = np.arange(n) / SR
    f = midi(note)
    x = np.sin(2 * np.pi * f * t) + 0.45 * np.sin(4 * np.pi * f * t) * np.exp(-t * 18) + 0.2 * np.sin(6 * np.pi * f * t) * np.exp(-t * 30)
    return x * np.exp(-t * 11) * np.minimum(1, t / 0.002) * 0.22

def riser(dur):
    n = int(dur * SR); t = np.arange(n) / SR
    x = hp(rng.standard_normal(n), 2500)
    return x * (t / dur) ** 2.2 * 0.18

def crash():
    n = int(2.6 * SR); t = np.arange(n) / SR
    x = hp(rng.standard_normal(n), 3500)
    return x * np.exp(-t * 2.1) * 0.16

def stab(notes, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    x = sum(saw(midi(nt), t, cutoff=4000) for nt in notes)
    return x * np.exp(-t * 1.6) * np.minimum(1, t / 0.003) * 0.11

# ---------- the song ----------
# D minor to F major feel: Dm  Bb  F  C  (vi IV I V in F) - bright and forward
PROG = [(50, [62, 65, 69]), (46, [62, 65, 70]), (53, [65, 69, 72]), (48, [64, 67, 72])]
ARP = [[74, 77, 81, 77], [74, 77, 82, 77], [77, 81, 84, 81], [76, 79, 84, 79]]

def compose(total, hit):
    n = int(total * SR)
    mix = np.zeros((2, n)); side = np.zeros(n)  # side = kick envelope, for ducking
    K, C, H, HO = kick(), clap(), hat(), hat(True)
    bars = int(np.ceil(hit / BAR))
    start = hit - bars * BAR  # align bar lines so the hit lands on a downbeat
    for b in range(bars):
        t0 = start + b * BAR
        root, chord = PROG[b % 4]
        full = b >= 1                     # bar 1: pad and arp only, then the groove enters
        if t0 + BAR > 0:
            place(mix, pad_chord(chord, BAR + 0.4), t0)
        for s in range(16):              # 16th-note pluck arpeggio, ping-pong delay
            ts = t0 + s * BEAT / 4
            note = ARP[b % 4][s % 4] + (12 if s in (6, 14) else 0)
            p = pluck(note)
            g = 0.9 if s % 4 == 0 else 0.6
            place(mix[0], p, ts, g); place(mix[1], p, ts, g * 0.8)
            place(mix[1], p, ts + 3 * BEAT / 4, g * 0.28); place(mix[0], p, ts + 6 * BEAT / 4, g * 0.14)
        if not full:
            continue
        for q in range(4):
            tq = t0 + q * BEAT
            place(mix, np.vstack([K, K]), tq)
            place(side, K, tq)
            if q in (1, 3):
                place(mix, np.vstack([C * 1.0, C * 0.92]), tq)
            place(mix, np.vstack([H * 0.8, H]), tq + BEAT / 2)
            if q == 3 and b % 2 == 1:
                place(mix, np.vstack([HO, HO * 0.8]), tq + BEAT / 2)
            for e8 in range(2):           # 8th-note bass on the root, octave pop on the last 8th
                nt = root - 12 + (12 if (q == 3 and e8 == 1) else 0)
                place(mix, np.vstack([bass_note(nt, BEAT / 2)] * 2), tq + e8 * BEAT / 2)
        for h16 in (13, 15):              # little 16th hat fills
            place(mix, np.vstack([H * 0.5, H * 0.6]), t0 + h16 * BEAT / 4)
    # riser into the final hit, then the hit itself
    rd = min(2 * BAR, hit)
    r = riser(rd); place(mix, np.vstack([r * 0.8, r]), hit - rd)
    place(mix, np.vstack([K, K]) * 1.1, hit); place(side, K, hit)
    cr = crash(); place(mix, np.vstack([cr, cr * 0.9]), hit)
    st = stab([53, 65, 69, 72, 77], max(0.5, total - hit)); place(mix, np.vstack([st, st]), hit)
    pd = pad_chord([65, 69, 72, 77], max(0.5, total - hit) + 0.3); place(mix, pd * 1.2, hit)
    place(mix, np.vstack([bass_note(41, min(1.2, total - hit))] * 2), hit)
    # sidechain: everything but the kick ducks a little on each kick, the pump of modern pop
    duck = 1 - 0.35 * onepole_lp(np.abs(side), 18) / (np.abs(side).max() + 1e-9) * 2.2
    duck = np.clip(duck, 0.55, 1)
    mix *= duck
    # gentle fade in, ring out at the end
    fi = int(0.25 * SR); mix[:, :fi] *= np.linspace(0, 1, fi)
    fo = int(min(1.2, total - hit) * SR); mix[:, n - fo:] *= np.linspace(1, 0, fo) ** 1.5
    mix = np.vstack([hp(mix[0], 30), hp(mix[1], 30)])   # no sub rumble under 30 Hz
    mix = mix / (np.abs(mix).max() + 1e-9) * 0.7
    mix = np.tanh(mix * 1.05)           # light glue, not a brick wall
    return mix

def write(path, x):
    x = np.clip(x, -1, 1)
    pcm = (x.T * 32767).astype('<i2')
    with wave.open(path, 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

if __name__ == '__main__':
    total, hit, out = float(sys.argv[1]), float(sys.argv[2]), sys.argv[3]
    write(out, compose(total, hit))
    print('wrote', out)

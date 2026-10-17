"""score2 plus a hit on the brand reveal (the cut from dark to light). Usage: python3 score3.py beats-score.json out.wav"""
import sys, json, wave
import numpy as np
import score as S, score2 as S2
tl = json.load(open(sys.argv[1])); x = S2.compose(tl) / 0.89
for h in tl.get('extra_hits', []):
    sw = S2.swell(S2.BAR); S.place(x, sw * 1.4, h - S2.BAR, 1)
    S.place(x, np.vstack([S2.boom(), S2.boom()]) * 1.2, h, 1)
    bass, low, high = S.FINAL
    for i, m in enumerate(low + high[:2]):
        S.place(x, S.piano(m, 0.6, 2.0), h + i * 0.012, 1, -0.3 + 0.12 * i)
x /= np.abs(x).max() + 1e-9; x *= 0.89
pcm = (np.clip(x, -1, 1).T * 32767).astype('<i2')
with wave.open(sys.argv[2], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(S.SR); w.writeframes(pcm.tobytes())
print('wrote', sys.argv[2], round(x.shape[1] / S.SR, 2), 's')

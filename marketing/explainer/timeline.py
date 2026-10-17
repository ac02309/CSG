"""Lays out the explainer from the real length of each spoken line: scene changes, captions and
the voice track all come from here, so picture, words and voice cannot drift apart."""
import json, soundfile as sf, numpy as np
S = json.load(open('script.json'))
SR = 24000
INTRO, LINE_GAP, SCENE_GAP, LEAD, OUTRO = 0.9, 0.28, 0.5, 0.4, 3.0
t = INTRO
scenes = []
for sc in S['scenes']:
    start = t - LEAD                     # the picture changes just before the voice starts
    lines = []
    for i, _ in enumerate(sc['lines']):
        a, _sr = sf.read(f"vo/{sc['id']}-{i}.wav")
        d = len(a) / _sr
        lines.append({'text': sc['lines'][i], 'file': f"vo/{sc['id']}-{i}.wav", 'start': round(t, 3), 'end': round(t + d, 3)})
        t += d + LINE_GAP
    t += SCENE_GAP - LINE_GAP
    scenes.append({**{k: v for k, v in sc.items() if k != 'lines'}, 'start': round(max(0, start), 3), 'lines': lines})
total = round(t - SCENE_GAP + OUTRO, 3)
for i, sc in enumerate(scenes):
    sc['end'] = scenes[i + 1]['start'] if i + 1 < len(scenes) else total
scenes[0]['start'] = 0
voice = np.zeros(int(total * SR) + SR)
for sc in scenes:
    for l in sc['lines']:
        a, _ = sf.read(l['file']); i = int(l['start'] * SR); voice[i:i + len(a)] += a
sf.write('voice.wav', voice[: int(total * SR)], SR)
json.dump({'total': total, 'scenes': scenes}, open('timeline.json', 'w'), indent=1)
print('total', total)
for sc in scenes: print(f"{sc['id']:13s} {sc['start']:7.2f} -> {sc['end']:7.2f}")

"""The typographic film's beat sheet: every line sits on a bar of the 112 BPM score, so cuts, counts
and musical hits land together. Writes beats.json (for the film page) and beats-score.json (for score)."""
import json
BAR = 4 * 60 / 112; T0 = 0.6
# (start bar, length in bars, act, slot, stage, eyebrow, line, sub)   act: dark | light
B = [
 (0,    1,   'dark',  'A', 0, '', 'Monday morning.', ''),
 (1,    1.5, 'dark',  'A', 0, '', 'Your best people are copying data.', ''),
 (2.5,  .75, 'dark',  'A', 0, '', 'Again.', ''),
 (3.25, 1.75,'dark',  'A', 0, '', 'Same report. Same checks. Same <em>mistakes.</em>', ''),
 (5,    2,   'dark',  'A', 0, '', 'One <em>typo</em> can reach a customer.', ''),
 (7,    3,   'light', 'A', 1, '', 'Clarke Systems Group.', 'We build the systems that do the work.'),
 (10,   1,   'light', 'A', 2, 'Integrations', 'Systems that talk to each other.', ''),
 (11,   1,   'light', 'A', 3, 'Quality checks', 'Every record checked.', ''),
 (12,   1,   'light', 'A', 4, 'Reporting', 'Reports that run themselves.', ''),
 (13,   1,   'light', 'A', 5, 'Scheduling', 'Plans that re-plan themselves.', ''),
 (14,   1,   'light', 'A', 6, 'AI processing', 'AI, proven before it ships.', ''),
 (15,   1,   'light', 'A', 7, 'Internal tools', 'Approvals in one place.', ''),
 (16,   1,   'dark',  'B', 0, '', 'This isn’t theory.', ''),
 (17,   1.5, 'dark',  'B', 0, 'Quality checks', '180+', 'errors stopped before release, across 30+ markets'),
 (18.5, 1.5, 'dark',  'B', 0, 'Scheduling', '290+', 'client projects planned, with no unresolved clashes'),
 (20,   1.5, 'dark',  'B', 0, 'AI processing', '3', 'AI model families tested before one went live'),
 (21.5, 1,   'light', 'B', 1, '', 'Free 20-minute demo.', ''),
 (22.5, 1,   'light', 'B', 1, '', 'Fixed price. <em>Agreed first.</em>', ''),
 (23.5, 1.5, 'light', 'B', 1, '', 'Nothing starts until you say <em>yes.</em>', ''),
 (25,   4,   'light', 'B', 2, '', 'END', ''),
]
beats = [dict(start=round(T0 + s * BAR, 3), end=round(T0 + (s + l) * BAR, 3), act=a, slot=sl, stage=st, eyebrow=e, line=t, sub=sub,
              kind='stat' if t[0].isdigit() else ('end' if t == 'END' else ('brand' if s == 7 else 'line'))) for s, l, a, sl, st, e, t, sub in B]
total = round(T0 + 29 * BAR + 0.4, 3)
json.dump({'total': total, 'bar': BAR, 'beats': beats}, open('beats.json', 'w'), indent=1)
at = lambda bar: T0 + bar * BAR
score_tl = {'total': total, 'scenes': [
  {'id': 'who', 'start': at(7), 'lines': [{'start': at(7)}]},
  {'id': 'proof', 'start': at(16), 'lines': [{'start': at(16) + .25}, {'start': at(17) + .04}, {'start': at(18.5) + .04}, {'start': at(20) + .04}]},
  {'id': 'how', 'start': at(21.5)},
  {'id': 'end', 'start': at(25), 'lines': [{'start': at(25) + .06}]}],
  'extra_hits': [at(7)]}
json.dump(score_tl, open('beats-score.json', 'w'), indent=1)
print('total', total, 's,', len(beats), 'beats')

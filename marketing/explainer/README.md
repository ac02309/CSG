# The brand film (about 1 minute, no voice)

The main film is typographic: bold words cut to a 112 BPM original score, with no voiceover, because generated voices were rejected as not human enough. The story runs:

- **The problem, on dark ink:** "Monday morning." … "One typo can reach a customer."
- **The cut to light:** a flash on the downbeat as the logo assembles.
- **Six solutions,** one bar each, each with its 3D scene.
- **The proof:** "This isn't theory." in near-silence, then 180+, 290+ and 3, each slamming in on a musical hit.
- **The offer:** free demo, a fixed price agreed before work starts, "Nothing starts until you say yes." (No figure in the film: prices live on the site and in outreach.)
- **The close:** "Less admin. Fewer errors. Same team." and the call to action.

## Rebuild it (run from this folder)

1. `python3 beats.py`: the beat sheet. Every line, its bar and length, its 3D scene and its light or dark act live here. It writes `beats.json` (for the film) and `beats-score.json` (for the score). Edit the words or timing here.
2. `python3 score3.py beats-score.json score-typo.wav`: the score (it uses `score.py` and `score2.py`). Then level it: `ffmpeg -i score-typo.wav -af "aresample=48000,loudnorm=I=-15:TP=-1.5:LRA=11" music-typo.wav`.
3. Copy `../../assets/film.js` and `../../assets/fonts/inter.woff2` here, then run `python3 -m http.server 8792 --bind 127.0.0.1`.
4. `node render2.js h quick` writes preview frames. `node render2.js h full` renders 16:9 and `v full` renders 9:16, about 20 minutes each.
5. Mux: `ffmpeg -i typo-h.mp4 -i music-typo.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest final-typo-h.mp4`.

`film2.html` is the film page: the light and dark cuts, the flash, kinetic words, count-up figures and camera push.

## The voiced explainer (on hold)

`index.html`, `render.js`, `timeline.py`, `score2.py` and `voice_fx.py` build a longer explainer timed to a voiceover. It is on hold until a real person records the read in the Go-to-Market Kit's "Video and voice" tab. To rebuild with a voice:

Run from this folder. `../audio/explainer-script.json` holds the 26 lines, grouped by scene.

1. **Voice, one WAV per line,** named `vo/<scene>-<n>.wav` (for example `vo/hook-0.wav`):
   - Google (key stored as a network secret for texttospeech.googleapis.com, header X-Goog-Api-Key): run `python3 ../audio/tts_google.py samples`, pick a voice, then run `python3 ../audio/tts_google.py read <Voice>`. Copy `../audio/read-<Voice>/*.wav` into `vo/`.
   - A recording: cut each line into its own file with the same names. Keep the best take of each.
2. **Timeline:** `python3 timeline.py` writes `timeline.json` and `voice.wav` from the real line lengths. Reading the WAVs needs `soundfile` (`pip install soundfile numpy`).
3. **Score:** `python3 score2.py timeline.json score.wav` writes the driving score. The swell, the stop on "This isn't theory.", the hits on each figure and the resolve all land on the voice.
4. **Mix:** voice over score, music lowered under each line, levelled to -15 LUFS. The ffmpeg chain is in `../audio/mix_voice.sh`; for a whole-film mix, use `voice.wav` and `score.wav` as its two inputs. `voice_fx.py` adds room tone and breaths, for synthetic voices only; a real recording doesn't need it.
5. **Render:**
   - Copy `../../assets/film.js` and `../../assets/fonts/inter.woff2` here.
   - Run `python3 -m http.server 8792 --bind 127.0.0.1`.
   - Then `node render.js h full` (16:9) and `node render.js v full` (9:16). About 35 minutes each; `quick` renders preview frames only.
   - Mux: `ffmpeg -i out-h.mp4 -i mix.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest final-h.mp4`.

`index.html` is the film page: layout, kinetic headlines, count-up figures, captions and camera push. `render.js` steps it frame by frame on the engine's own clock and streams the frames to ffmpeg.

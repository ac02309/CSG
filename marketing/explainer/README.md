# The explainer film (about 1:45)

A 13-scene explainer built on the site's own 3D engine: hook, problem, who we are, the six solutions, proof (180+, 290+, 3), how it works, prices, and the close. The voice sets the timing: every scene change, caption and number reveal follows the length of each spoken line.

Generated open-source voices were rejected as not human enough. The voice is either a real team member's recording or Google Cloud's Chirp 3 HD (see `../audio/tts_google.py`).

## Rebuild with a voice

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

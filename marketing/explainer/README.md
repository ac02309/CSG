# The brand film: one journey (63 s, no voice)

One continuous camera move follows one invoice line from the client's problem to our system and back to their customer. Nothing cuts; the camera drifts, tracks, dives and whips between places.

1. **The problem, on dark:**
   - "Monday morning." A spreadsheet where someone hops cell to cell by hand.
   - "Your best people are copying data." Values fly from cell to cell.
   - "Again." Time rewinds.
   - "Same report. Same checks. Same mistakes." Three identical reports rise out of the sheet, and the third is stamped WRONG.
2. **The cost:**
   - The camera dives into one cell, where a keystroke turns £1,250.00 into £12,500.00.
   - The wrong value flies into a customer's inbox, and the alarm rings.
3. **The turn:** every cell pours into a ring, with a flash and a hit: the Clarke Systems Group logo. The ring is a road, and the dot is the customer.
4. **Our system:**
   - "Same invoice. Our system." The same record, typo included, travels the road past six working systems.
   - At Quality checks the very same typo is caught and fixed.
   - It reaches the dot: "Delivered · correct".
5. **The big picture:** the camera pulls back to night. The road was our logo all along. "This isn't theory." Then the proof is built around the ring:
   - 180 errors caught on it;
   - 290 projects in a clash-free ring;
   - 3 model families, one docking.
6. **The offer:** the customer's dot becomes, in turn:
   - the 20-minute dial;
   - the AGREED seal on the written plan;
   - the knob of the yes switch;
   - the logo's dot again.

   The close is "Less admin. Fewer errors. Same team."

Sound: an original 112 BPM score, plus 793 synthesised sound effects. Each effect is placed on the frame of its visual event, from the film's own cue list.

## Rebuild it (run from this folder)

1. `python3 beats.py`, then `python3 score3.py beats-score.json score-typo.wav`, then `ffmpeg -i score-typo.wav -af "aresample=48000,loudnorm=I=-15:TP=-1.5:LRA=11" -ar 48000 music48.wav`. This is the score; the film's timings follow the same beat sheet.
2. Copy `../../assets/fonts/inter.woff2` here, then run `python3 -m http.server 8792 --bind 127.0.0.1`. To preview live, open `http://localhost:8792/film3.html` (add `?v` for 9:16).
3. Run `node render3.js h stills 12.4 25.3 38.6` for preview frames. `node render3.js h full` and `node render3.js v full` render the films (`j-h.mp4`, `j-v.mp4`, 30 fps). Each run also writes `cues.json`, the sound cue list.
4. `python3 sfx.py cues.json sfx.wav` builds the sound effects. Their levels are in `LEVEL`: hero moments sit level with the music, and textures 10–15 dB under it.
5. Mix, ducking the music under the hits and levelling to -14 LUFS:

   ```
   ffmpeg -i music48.wav -i sfx.wav -filter_complex "[1:a]asplit=2[s1][s2];[0:a]volume=-2dB[m];[m][s1]sidechaincompress=threshold=0.06:ratio=3:attack=4:release=160:makeup=1[md];[md][s2]amix=inputs=2:normalize=0,alimiter=limit=0.89,loudnorm=I=-14:TP=-1.2:LRA=11" -ar 48000 mix-journey.wav
   ```

6. Mux: `ffmpeg -i j-h.mp4 -i mix-journey.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart final-journey-h.mp4`.

`film2.html` and `render2.js` are the earlier typographic cut, kept for reference.

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

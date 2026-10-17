// Renders the explainer frame by frame on the scene's own clock and streams the frames to ffmpeg.
// node render.js <h|v> <test|full> [fps]
const { chromium } = require('/home/user/CSG/node_modules/playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const [,, layout = 'h', mode = 'test', FPS = '24'] = process.argv;
const fps = +FPS, TL = JSON.parse(fs.readFileSync(__dirname + '/timeline.json'));
const W = layout === 'v' ? 1080 : 1920, H = layout === 'v' ? 1920 : 1080;
const N = Math.ceil(TL.total * fps);
(async () => {
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1.5 })).newPage();
  p.setDefaultTimeout(300000);
  await p.goto(`http://localhost:8792/index.html?capture${layout === 'v' ? '&v' : ''}`);
  await p.evaluate(() => window.__ready);
  await p.waitForFunction(() => window.__csgStep && window.__csgStep(0) > 0);
  await p.evaluate(() => document.fonts.ready);
  const testAt = TL.scenes.map(s => (s.start + s.end) / 2).concat([TL.total - 1]);
  const want = mode !== 'full' ? new Set(testAt.map(t => Math.round(t * fps))) : null;
  let ff = null;
  if (mode === 'full') {
    ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
      '-vf', `scale=${W}:${H}:flags=lanczos,format=yuv420p`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-profile:v', 'high',
      '-movflags', '+faststart', `${__dirname}/out-${layout}.mp4`], { stdio: ['pipe', 'inherit', 'inherit'] });
  }
  const last = mode === 'test' || mode === 'quick' ? Math.max(...want) : N - 1;
  // quick: only the 1.5 s before each sample frame are stepped, enough for the scene to settle
  const near = f => [...want].some(w => f <= w && f > w - 1.5 * fps);
  for (let f = 0; f <= last; f++) {
    if (mode === 'quick' && !near(f)) continue;
    const t = f / fps;
    await p.evaluate(t => window.__setT(t), t);
    await p.mouse.move(W * (.5 + .3 * Math.sin(2 * Math.PI * t / 23)), H * (.5 + .16 * Math.sin(2 * Math.PI * t / 13 + 1)));
    await p.evaluate(dt => window.__csgStep(dt), 1 / fps);
    if (mode !== 'full') {
      if (want.has(f)) await p.screenshot({ path: `${__dirname}/test-${layout}-${String(f).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 85 });
    } else {
      const buf = await p.screenshot({ type: 'jpeg', quality: 93 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (f % 240 === 0) console.log(layout, 'frame', f, '/', N);
    }
  }
  if (ff) { ff.stdin.end(); await new Promise(r => ff.on('close', r)); }
  await b.close();
  console.log('done', layout, mode);
})();

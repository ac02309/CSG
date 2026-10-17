// node render3.js <h|v> <stills|full> [times...]
const { chromium } = require('/home/user/CSG/node_modules/playwright');
const { spawn } = require('child_process'); const fs = require('fs');
const [,, layout = 'h', mode = 'stills', ...ts] = process.argv;
const fps = 30, TOTAL = 63.143, W = layout === 'v' ? 1080 : 1920, H = layout === 'v' ? 1920 : 1080;
(async () => {
  const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: W, height: H } })).newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(`http://localhost:8792/film3.html?capture${layout === 'v' ? '&v' : ''}`); await p.evaluate(() => window.__ready);
  if (errs.length) { console.log('ERRORS', errs); }
  fs.writeFileSync(__dirname + '/cues.json', JSON.stringify(await p.evaluate(() => window.__cues)));
  const cvs = await p.$('canvas');
  if (mode === 'stills') {
    for (const t of ts) { await p.evaluate(t => window.__setT(t), +t); await cvs.screenshot({ path: `${__dirname}/s3-${layout}-${t}.jpg`, type: 'jpeg', quality: 80 }); }
  } else {
    const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', `${__dirname}/j-${layout}.mp4`], { stdio: ['pipe', 'inherit', 'inherit'] });
    const N = Math.ceil(TOTAL * fps);
    for (let f = 0; f < N; f++) { await p.evaluate(t => window.__setT(t), f / fps); const buf = await cvs.screenshot({ type: 'jpeg', quality: 92 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); if (f % 300 === 0) console.log(layout, f, '/', N); }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  if (errs.length) console.log('ERRORS', errs.slice(0, 5));
  await b.close(); console.log('done', layout, mode);
})();

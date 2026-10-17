// Render report.html to an A4 PDF with the repo's Playwright (browsers already installed; never runs `playwright install`).
import { pathToFileURL } from 'node:url';

export async function renderPdf(htmlPath, pdfPath) {
  process.env.PLAYWRIGHT_BROWSERS_PATH ||= '/opt/pw-browsers';
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    throw new Error('Playwright is not available, so the PDF was skipped. The HTML report and CSV are complete.');
  }
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: 'print' });
    await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
  } finally {
    await browser.close();
  }
}

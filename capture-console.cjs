const puppeteer = require('puppeteer');

(async () => {
  const url = 'http://localhost:3000/'; // Route `/` on port 3000
  console.log(`Navigating to ${url}...`);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    const type = msg.type();
    if (['error', 'warning', 'warn'].includes(type)) {
      console.log(`[CONSOLE ${type.toUpperCase()}] ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}`);
  });

  page.on('requestfailed', request => {
    console.log(`[REQUEST FAILED] ${request.url()} - ${request.failure()?.errorText}`);
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    console.log('Page loaded successfully.');
    
    // Wait an additional 3 seconds to let client-side mounting/hydration finish
    await new Promise(r => setTimeout(r, 3000));
  } catch (error) {
    console.error(`[NAVIGATION ERROR] ${error.message}`);
  } finally {
    await browser.close();
    console.log('Capture finished.');
  }
})();

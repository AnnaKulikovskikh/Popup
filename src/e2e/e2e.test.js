import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('creation popup', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('shoud create message', async () => {
    await page.goto(baseUrl);
    const btn = await form.$('[data-id=btn]');
    btn.click();
    await page.waitFor('.message');
  });
});

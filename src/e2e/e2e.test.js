import puppetteer from 'puppeteer';
import { fork } from 'child_process';
import { format } from 'path';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popup form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('shoud create message', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('[data-id=btn]');
    btn.click();
    await page.waitFor('.message');
  });
});

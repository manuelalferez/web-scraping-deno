import puppeteer from "https://deno.land/x/puppeteer@14.1.1/mod.ts";

const URL = "https://www.scrapethissite.com/pages/forms";

try {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.focus("#q");
  await page.keyboard.type("Boston Bruins");
  await page.waitForSelector("#q");
  await page.keyboard.press("Enter");
} catch (error) {
  console.log(error);
}

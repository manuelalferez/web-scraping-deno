import puppeteer from "https://deno.land/x/puppeteer@14.1.1/mod.ts";

const URL = "https://www.linkedin.com";

try {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.focus("session_key");

  const EMAIL = Deno.env.get("EMAIL");
  const PASSWORD = Deno.env.get("PASSWORD");
} catch (error) {
  console.log(error);
}

import puppeteer from "https://deno.land/x/puppeteer@14.1.1/mod.ts";

const LOGIN_URL = "https://www.linkedin.com";
const JOBS_URL =
  "https://www.linkedin.com/jobs/search/?f_AL=true&f_JT=F&f_TPR=r86400&f_WT=1%2C2%2C3&sortBy=R&location=Spain&keywords=frontend";
const EMAIL = Deno.env.get("EMAIL");
const PASSWORD = Deno.env.get("PASSWORD");

if (EMAIL === undefined || PASSWORD === undefined) {
  throw new Error(
    "EMAIL or PASSWORD are missing. Please save them in your .env file."
  );
}

try {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(LOGIN_URL);

  await page.focus("#session_key");
  await page.keyboard.type(EMAIL);
  await page.waitForSelector("#session_key");
  await page.focus("#session_password");
  await page.keyboard.type(PASSWORD);
  await page.waitForSelector("#session_password");
  await page.keyboard.press("Enter");

  await page.goto(JOBS_URL);
  await page.evaluate(() => {});
} catch (error) {
  console.log(error);
}

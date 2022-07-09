import { dew } from "https://jspm.dev/npm:cheerio";
import { cheerio } from "https://deno.land/x/cheerio@1.0.5/mod.ts";

const url = "https://example.com";

try {
  const res = await fetch(url);
  const html: string = await res.text();
  const $ = cheerio.load(html);

  const pageHeader = $("h1").text();

  console.log(pageHeader);
} catch (error) {
  console.log(error);
}

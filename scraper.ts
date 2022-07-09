import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const url = "https://example.com";

try {
  const res = await fetch(url);
  const html: string = await res.text();
  const document = new DOMParser().parseFromString(html, "text/html");

  const pageHeader: any = document.querySelector("h1").textContent;

  console.log(pageHeader);
} catch (error) {
  console.log(error);
}

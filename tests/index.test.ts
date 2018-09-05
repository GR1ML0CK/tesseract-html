import { assert } from "chai";
import { JSDOM } from "jsdom";
// noinspection TypeScriptPreferShortImport
import {a, script} from "../dist/index.js";

(global as any).document =  new JSDOM(`...`).window.document;


describe("elements", () => {
  it("<a>", () => {
    assert.equal(a().outerHTML, "<a></a>");
  });

  it("<script>", () => {
    assert.equal(script().outerHTML, "<script></script>");
    assert.equal(
      script({}, () => alert("test")).outerHTML,
      `<script>function () { return alert("test"); }</script>`);
  });
});
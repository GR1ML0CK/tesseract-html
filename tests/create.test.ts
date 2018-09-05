import { assert } from "chai";
import { JSDOM } from "jsdom";
import create from "../dist/create";

(global as any).document =  new JSDOM(`...`).window.document;

const DIV = "div";
const DIV_EL = "<div></div>";

describe("create", () => {
  it("create single div with no attributes", () => {
    const div = create(DIV);
    assert.equal(div.outerHTML, DIV_EL);
  });
});
import ElementAttributes from "./element-attributes/el-attributes";
import DOMElements from "./types/DOMElements";

/**
 * A basic object loop. This avoids repeated code or pulling in a dependency.
 * @param obj - the object to iterate over.
 * @param cb - a function to call on each object property
 */
const forEach = (obj: any, cb: (value: any, key2: string) => void): void => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      cb(value, key);
    }
  }
};

/**
 * Sets all the non-standard attributes on the element (attrs, data, aria) using the `.setAttribute()` method
 * @param el - the element to add attributes to
 * @param attrs - the attributes to add to the element structured as a object of key:value pairs
 * @param objKey - the key for the attrs object (ie "attrs", "data", "aria")
 */
const setAttributes = (el: HTMLElement, attrs: BasicObject, objKey: string): void => {
  forEach(attrs, (value, key) => {
    let attrName = "";
    if (objKey !== "attrs") attrName += `${objKey}-`;
    attrName += key;
    el.setAttribute(attrName, value);
  });
};

/**
 * Appends all the child elements a parent element
 * @param parent - the parent element to append to
 * @param children - the child elements to append
 */
const appendChildren = (parent: HTMLElement, children: DOMElements): void => {
  if (children) {
    for (let i = 0, len = children.length; i < len; i++) {
      let child = children[i];
      if (typeof child === "function") child = child();
      if (child) parent.appendChild(child);
    }
  }
};

/**
 * Creates an HTMLElement and allow for setting it's attributes and child elements
 *
 * @param tag - the html tag type (e.g "a", "div", "h3")
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html strucure based on the passed params
 */
const create = (tag: string, attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  const el = document.createElement(tag);
  if (attrs) {
    forEach(attrs, (value, key) => {
      if (typeof value === "string") (el as any)[key] = value;
      else setAttributes(el, value, key);
    });
  }
  appendChildren(el, children);
  return el;
};

export default create;

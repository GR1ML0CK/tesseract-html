/// <amd-module name="cet.html-builder"/>

import DOMElements from "./types/DOMElements";
import create from "./create";
import Tags from "./tags";
import BrAttributes from "./element-attributes/br-attributes";
import AAttributes from "./element-attributes/a-attributes";
import ElementAttributes from "./element-attributes/el-attributes";
import ImgAttributes from "./element-attributes/img-attributes";
import IframeAttributes from "./element-attributes/iframe-attributes";
import HrAttributes from "./element-attributes/hr-attributes";
import FormAttributes from "./element-attributes/form-attributes";
import SelectAttributes from "./element-attributes/select-attributes";
import OptionAttributes from "./element-attributes/option-attributes";
import InputAttributes from "./element-attributes/input-attributes";
import LiAttributes from "./element-attributes/li-attributes";

/**
 * Creates a [HTMLAnchorElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const a = (attrs?: AAttributes, ...children: DOMElements): HTMLAnchorElement => {
  return create(Tags.a, attrs, ...children) as HTMLAnchorElement;
};

/**
 * Creates a <b> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const b = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.b, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLBRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const br = (attrs?: BrAttributes): HTMLBRElement => {
  return create(Tags.br, attrs) as HTMLBRElement;
};

/**
 * Creates a <code> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const code = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.code, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLDivElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const div = (attrs?: ElementAttributes, ...children: DOMElements): HTMLDivElement => {
  return create(Tags.div, attrs, ...children) as HTMLDivElement;
};

/**
 * Creates a <em> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const em = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.em, attrs, ...children) as HTMLElement;
};

/**
 * Creates a <footer> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const footer = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.footer, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLFormElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const form = (attrs?: FormAttributes, ...children: DOMElements): HTMLFormElement => {
  return create(Tags.form, attrs, ...children) as HTMLFormElement;
};

/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h1 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h1, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h2 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h2, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <h3> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h3 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h3, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <h4> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h4 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h4, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <h5> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h5 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h5, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <h6> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const h6 = (attrs?: ElementAttributes, ...children: DOMElements): HTMLHeadingElement => {
  return create(Tags.h6, attrs, ...children) as HTMLHeadingElement;
};

/**
 * Creates a <header> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const header = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.header, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLHRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const hr = (attrs?: HrAttributes): HTMLHRElement => {
  return create(Tags.hr, attrs) as HTMLHRElement;
};

/**
 * Creates an <i> element and allow for setting it's attributes and child elements
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const i = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.i, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLIFrameElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const iframe = (attrs?: IframeAttributes): HTMLIFrameElement => {
  return create(Tags.iframe, attrs) as HTMLIFrameElement;
};

/**
 * Creates a [HTMLImageElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const img = (attrs?: ImgAttributes): HTMLImageElement => {
  return create(Tags.img, attrs) as HTMLImageElement;
};

/**
 * Creates a [HTMLInputElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const input = (attrs?: InputAttributes): HTMLInputElement => {
  return create(Tags.input, attrs) as HTMLInputElement;
};

/**
 * Creates a [HTMLLabelElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const label = (attrs?: ElementAttributes, ...children: DOMElements): HTMLLabelElement => {
  return create(Tags.label, attrs, ...children) as HTMLLabelElement;
};

/**
 * Creates a [HTMLLIElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const li = (attrs?: LiAttributes, ...children: DOMElements): HTMLLIElement => {
  return create(Tags.li, attrs, ...children) as HTMLLIElement;
};

/**
 * Creates a <mark> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const mark = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.mark, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLOListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const ol = (attrs?: ElementAttributes, ...children: DOMElements): HTMLOListElement => {
  return create(Tags.ol, attrs, ...children) as HTMLOListElement;
};

/**
 * Creates a [HTMLOptionElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export const option = (attrs?: OptionAttributes): HTMLOptionElement => {
  return create(Tags.option, attrs) as HTMLOptionElement;
};

/**
 * Creates a [HTMLParagraphElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const p = (attrs?: ElementAttributes, ...children: DOMElements): HTMLParagraphElement => {
  return create(Tags.p, attrs, ...children) as HTMLParagraphElement;
};

/**
 * Creates a <section> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const section = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.section, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLSelectElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const select = (attrs?: SelectAttributes, ...children: DOMElements): HTMLSelectElement => {
  return create(Tags.select, attrs, ...children) as HTMLSelectElement;
};

/**
 * Creates a <small> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const small = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.small, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLSpanElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const span = (attrs?: ElementAttributes, ...children: DOMElements): HTMLSpanElement => {
  return create(Tags.span, attrs, ...children) as HTMLSpanElement;
};

/**
 * Creates a <strong> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const strong = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.strong, attrs, ...children) as HTMLElement;
};

/**
 * Creates a <sub> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const sub = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.sub, attrs, ...children) as HTMLElement;
};

/**
 * Creates a <sup> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const sup = (attrs?: ElementAttributes, ...children: DOMElements): HTMLElement => {
  return create(Tags.sup, attrs, ...children) as HTMLElement;
};

/**
 * Creates a [HTMLUListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export const ul = (attrs?: ElementAttributes, ...children: DOMElements): HTMLUListElement => {
  return create(Tags.ul, attrs, ...children) as HTMLUListElement;
};

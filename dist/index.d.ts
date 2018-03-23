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
export declare const a: (attrs?: AAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLAnchorElement;
/**
 * Creates a <b> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const b: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLBRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const br: (attrs?: BrAttributes | undefined) => HTMLBRElement;
/**
 * Creates a <code> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const code: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLDivElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const div: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLDivElement;
/**
 * Creates a <em> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const em: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a <footer> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const footer: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLFormElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const form: (attrs?: FormAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLFormElement;
/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h1: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h2: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <h3> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h3: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <h4> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h4: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <h5> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h5: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <h6> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const h6: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLHeadingElement;
/**
 * Creates a <header> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const header: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLHRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const hr: (attrs?: HrAttributes | undefined) => HTMLHRElement;
/**
 * Creates an <i> element and allow for setting it's attributes and child elements
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const i: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLIFrameElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const iframe: (attrs?: IframeAttributes | undefined) => HTMLIFrameElement;
/**
 * Creates a [HTMLImageElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const img: (attrs?: ImgAttributes | undefined) => HTMLImageElement;
/**
 * Creates a [HTMLInputElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const input: (attrs?: InputAttributes | undefined) => HTMLInputElement;
/**
 * Creates a [HTMLLabelElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const label: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLLabelElement;
/**
 * Creates a [HTMLLIElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const li: (attrs?: LiAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLLIElement;
/**
 * Creates a <mark> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const mark: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLOListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const ol: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLOListElement;
/**
 * Creates a [HTMLOptionElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
export declare const option: (attrs?: OptionAttributes | undefined) => HTMLOptionElement;
/**
 * Creates a [HTMLParagraphElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const p: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLParagraphElement;
/**
 * Creates a <section> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const section: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLSelectElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const select: (attrs?: SelectAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLSelectElement;
/**
 * Creates a <small> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const small: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLSpanElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const span: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLSpanElement;
/**
 * Creates a <strong> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const strong: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a <sub> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const sub: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a <sup> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const sup: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
/**
 * Creates a [HTMLUListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
export declare const ul: (attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLUListElement;

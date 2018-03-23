import ElementAttributes from "./element-attributes/el-attributes";
/**
 * Creates an HTMLElement and allow for setting it's attributes and child elements
 *
 * @param tag - the html tag type (e.g "a", "div", "h3")
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html strucure based on the passed params
 */
declare const create: (tag: string, attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
export default create;

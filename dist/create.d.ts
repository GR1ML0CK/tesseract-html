import ElementAttributes from "./element-attributes/el-attributes";
declare const create: (tag: string, attrs?: ElementAttributes | undefined, ...children: (HTMLElement | DocumentFragment | null | undefined)[]) => HTMLElement;
export default create;

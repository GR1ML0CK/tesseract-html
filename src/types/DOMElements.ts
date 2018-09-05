import DOMElement from "./DOMElement";

/**
 * A Array of DOMElement as a type. This is used because this type is often used in this way.
 */
type DOMElements = Array<DOMElement | (() => DOMElement)>;

export default DOMElements;
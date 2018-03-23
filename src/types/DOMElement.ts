/**
 * Type for any html element that is passed to the `create()` method as a child element/
 * This allows for null or undefined values. These are programmatically handled by
 * functionality in 'create()'.
 */

type DOMElement = HTMLElement | DocumentFragment | null | undefined;

export default DOMElement;
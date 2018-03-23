/**
 * Base interface for defining the valid structure the the attributes of an element that will be
 *  created by the tesseract.
 */
export default interface ElementAttributes {
  accessKey?: string;

  className?: string;

  id?: string;

  dir?: string;

  draggable?: boolean;

  hidden?: boolean;

  hideFocus?: boolean;

  textContent?: string;

  innerHTML?: string;

  innerText?: string;

  /**
   * Properties placed in this object for an element will be prefixed with "data-"
   */
  data?: { [key: string]: any };

  /**
   * Properties placed in this object for an element will be prefixed with "aria-"
   */
  aria?: { [key: string]: string };

  /**
   * Properties placed in this object are for custom attributes that are not native to the element.
   * In the case of aria or data attributes their respective objects should be used
   */
  attrs?: { [key: string]: string };
};

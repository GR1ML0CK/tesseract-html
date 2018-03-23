"use strict";
/// <amd-module name="cet.html-builder"/>
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
/**
 * Creates a [HTMLAnchorElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.a = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["a" /* a */, attrs].concat(children));
};
/**
 * Creates a <b> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.b = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["b" /* b */, attrs].concat(children));
};
/**
 * Creates a [HTMLBRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.br = function (attrs) {
    return create_1.default("br" /* br */, attrs);
};
/**
 * Creates a <code> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.code = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["code" /* code */, attrs].concat(children));
};
/**
 * Creates a [HTMLDivElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.div = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["div" /* div */, attrs].concat(children));
};
/**
 * Creates a <em> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.em = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["em" /* em */, attrs].concat(children));
};
/**
 * Creates a <footer> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.footer = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["footer" /* footer */, attrs].concat(children));
};
/**
 * Creates a [HTMLFormElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.form = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["form" /* form */, attrs].concat(children));
};
/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h1 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h1" /* h1 */, attrs].concat(children));
};
/**
 * Creates a <h2> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h2 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h2" /* h2 */, attrs].concat(children));
};
/**
 * Creates a <h3> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h3 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h3" /* h3 */, attrs].concat(children));
};
/**
 * Creates a <h4> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h4 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h4" /* h4 */, attrs].concat(children));
};
/**
 * Creates a <h5> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h5 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h5" /* h5 */, attrs].concat(children));
};
/**
 * Creates a <h6> [HTMLHeadingElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.h6 = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["h6" /* h6 */, attrs].concat(children));
};
/**
 * Creates a <header> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.header = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["header" /* header */, attrs].concat(children));
};
/**
 * Creates a [HTMLHRElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.hr = function (attrs) {
    return create_1.default("hr" /* hr */, attrs);
};
/**
 * Creates an <i> element and allow for setting it's attributes and child elements
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.i = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["i" /* i */, attrs].concat(children));
};
/**
 * Creates a [HTMLIFrameElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.iframe = function (attrs) {
    return create_1.default("iframe" /* iframe */, attrs);
};
/**
 * Creates a [HTMLImageElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.img = function (attrs) {
    return create_1.default("img" /* img */, attrs);
};
/**
 * Creates a [HTMLInputElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.input = function (attrs) {
    return create_1.default("input" /* input */, attrs);
};
/**
 * Creates a [HTMLLabelElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.label = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["label" /* label */, attrs].concat(children));
};
/**
 * Creates a [HTMLLIElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.li = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["li" /* li */, attrs].concat(children));
};
/**
 * Creates a <mark> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.mark = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["mark" /* mark */, attrs].concat(children));
};
/**
 * Creates a [HTMLOListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.ol = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["ol" /* ol */, attrs].concat(children));
};
/**
 * Creates a [HTMLOptionElement] and allow for setting it's attributes
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @returns the generated html structure based on the passed params
 */
exports.option = function (attrs) {
    return create_1.default("option" /* option */, attrs);
};
/**
 * Creates a [HTMLParagraphElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.p = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["p" /* p */, attrs].concat(children));
};
/**
 * Creates a <section> [HTMLElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.section = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["section" /* section */, attrs].concat(children));
};
/**
 * Creates a [HTMLSelectElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.select = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["select" /* select */, attrs].concat(children));
};
/**
 * Creates a <small> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.small = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["small" /* small */, attrs].concat(children));
};
/**
 * Creates a [HTMLSpanElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.span = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["span" /* span */, attrs].concat(children));
};
/**
 * Creates a <strong> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.strong = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["strong" /* strong */, attrs].concat(children));
};
/**
 * Creates a <sub> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.sub = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["sub" /* sub */, attrs].concat(children));
};
/**
 * Creates a <sup> and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.sup = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["sup" /* sup */, attrs].concat(children));
};
/**
 * Creates a [HTMLUListElement] and allow for setting it's attributes and child elements
 *
 * @param attrs - the HTMLElement attributes to add to the element (e.g. {className: "foo", textContent: "bar"})
 * @param children - the child elements to append to the main element. param order will dictate the append order
 * @returns the generated html structure based on the passed params
 */
exports.ul = function (attrs) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return create_1.default.apply(void 0, ["ul" /* ul */, attrs].concat(children));
};
//# sourceMappingURL=index.js.map
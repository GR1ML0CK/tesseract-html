"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A basic object loop. This avoids repeated code or pulling in a dependency.
 * @param obj - the object to iterate over.
 * @param cb - a function to call on each object property
 */
var forEach = function (obj, cb) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            cb(value, key);
        }
    }
};
var setAttributes = function (el, attrs, objKey) {
    forEach(attrs, function (value, key) {
        var attrName = "";
        if (objKey !== "attrs")
            attrName += objKey + "-";
        attrName += key;
        el.setAttribute(attrName, value);
    });
};
var appendChildren = function (parent, children) {
    if (children) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (child)
                parent.appendChild(child);
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
var create = function (tag, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var el = document.createElement(tag);
    if (attrs) {
        forEach(attrs, function (value, key) {
            if (typeof value === "string") {
                el[key] = value;
            }
            else {
                setAttributes(el, value, key);
            }
        });
    }
    appendChildren(el, children);
    return el;
};
exports.default = create;
//# sourceMappingURL=create.js.map
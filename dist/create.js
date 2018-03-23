"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
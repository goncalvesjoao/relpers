"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function injectProps(target, name, descriptor) {
  var oldFunction = descriptor.value;

  descriptor.value = function propsInjectorFunction() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return oldFunction.bind(this).apply(undefined, [this.props].concat(args));
  };

  return descriptor;
}

exports["default"] = injectProps;
module.exports = exports["default"];
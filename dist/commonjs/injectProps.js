'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function injectProps(propertyNames, target, name, descriptor) {
  var originalFunction = descriptor.value;

  if (typeof originalFunction !== 'function') {
    throw new SyntaxError('@injectProps can only be used on functions, not: ' + originalFunction);
  }

  return _extends({}, descriptor, {
    value: function propsInjectorWrapper() {
      var _this = this;

      var properties = propertyNames.map(function (propertyName) {
        return _this[propertyName];
      });

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var newArgs = properties.concat(args);

      return originalFunction.apply(this, newArgs);
    }
  });
}

function applyInjectProps() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return typeof args[0] === 'object' ? injectProps.apply(undefined, [['props']].concat(args)) : injectProps.bind(null, args);
}

exports['default'] = applyInjectProps;
module.exports = exports['default'];
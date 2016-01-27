'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function applyMixin(target, mixin) {
  // apply mixin to the target class
  // and return the mixed class
  return Object.keys(mixin).reduce(function (targetClass, key) {
    // if the target class has the prop or method
    if (targetClass[key] || targetClass.prototype[key]) {
      // return it untouched
      return targetClass;
    }

    // get the value
    var value = mixin[key];

    // if the value is a functoin
    if (typeof value === 'function') {
      // add the value to the prototype
      // of the targetClass
      targetClass.prototype[key] = value;
      // return the target class
      return targetClass;
    }

    // add the value as a static prop
    targetClass[key] = value;

    // return the class
    return targetClass;
  }, target);
}

function applyMixinBuilder() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function (target) {
    return mixins.reduce(applyMixin, target);
  };
}

exports['default'] = applyMixinBuilder;
module.exports = exports['default'];
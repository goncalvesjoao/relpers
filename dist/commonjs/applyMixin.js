/*
 * Apply mixin (POJO) to ES6 class
 * @param target {Class} - The class to decorate
 * @param mixin {Object} - The object mixin to apply
 * @return {Class} - Decorated class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function applyMixin(target, mixin) {
  // apply mixin to the target class
  // and return the mixed class
  return Object.keys(mixin).reduce(function (targetClass, key) {
    // if the key is contextTypes
    if (key === 'contextTypes') {
      // merge the target and mixin contextTypes
      var _value = _extends({}, mixin[key], targetClass[key]);
      // apply it
      targetClass[key] = _value;
      // return the target class
      return targetClass;
    }

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

/*
 * Apply one or more mixins (POJOs) to a ES6 class
 * @param mixins {Array} - List of mixins to apply
 * @return {Function} - Function to apply the list of mixins
 */
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
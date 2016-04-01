webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _killEvent = __webpack_require__(1);

	var _killEvent2 = _interopRequireDefault(_killEvent);

	var _injectProps = __webpack_require__(2);

	var _injectProps2 = _interopRequireDefault(_injectProps);

	var _applyMixin = __webpack_require__(3);

	var _applyMixin2 = _interopRequireDefault(_applyMixin);

	exports['default'] = {
	  killEvent: _killEvent2['default'],
	  injectProps: _injectProps2['default'],
	  applyMixin: _applyMixin2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function killEvent(target, name, descriptor) {
	  var oldHandler = target;

	  function eventCanceler(event) {
	    event.stopPropagation();
	    event.preventDefault();

	    oldHandler.apply(this, arguments);
	  }

	  if (typeof target === 'function') {
	    return eventCanceler;
	  }

	  oldHandler = descriptor.value;
	  descriptor.value = eventCanceler;

	  return descriptor;
	}

	exports['default'] = killEvent;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ }
]);
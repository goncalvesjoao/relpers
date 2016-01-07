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

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ }
]);
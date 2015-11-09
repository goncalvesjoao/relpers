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

	exports['default'] = {
	  killEvent: _killEvent2['default'],
	  injectProps: _injectProps2['default']
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

/***/ }
]);
webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(22);

	var _src2 = _interopRequireDefault(_src);

	// Bootstraping your single page app

	var _reactDom = __webpack_require__(16);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(73);

	var _history = __webpack_require__(303);

	window.React = _react2['default'];

	// Configuring Relpers
	// window.appConfig is being populated on public/index.html
	// that in turn is being populated by spa/config/spa.js#appConfig entry.
	_src2['default'].config = window.appConfig;
	var _require = __webpack_require__(447);

	var routes = _require.routes;

	var history = (0, _history.useBasename)(_history.createHistory)({
	  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1)
	});

	_reactDom2['default'].render(_react2['default'].createElement(_reactRouter.Router, { routes: routes, history: history }), document.getElementById('spa'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Form = __webpack_require__(449);

	var _Form2 = _interopRequireDefault(_Form);

	var _Input = __webpack_require__(450);

	var _Input2 = _interopRequireDefault(_Input);

	var _Spinner = __webpack_require__(105);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Repeater = __webpack_require__(451);

	var _Repeater2 = _interopRequireDefault(_Repeater);

	var _killEvent = __webpack_require__(208);

	var _killEvent2 = _interopRequireDefault(_killEvent);

	var _injectProps = __webpack_require__(207);

	var _injectProps2 = _interopRequireDefault(_injectProps);

	var _ServiceStatus = __webpack_require__(104);

	var _ServiceStatus2 = _interopRequireDefault(_ServiceStatus);

	exports['default'] = {
	  config: {},

	  Form: _Form2['default'],
	  Input: _Input2['default'],
	  Spinner: _Spinner2['default'],
	  Repeater: _Repeater2['default'],
	  killEvent: _killEvent2['default'],
	  injectProps: _injectProps2['default'],
	  ServiceStatus: _ServiceStatus2['default']
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Prism = (function (_React$Component) {
	  _inherits(Prism, _React$Component);

	  function Prism() {
	    _classCallCheck(this, Prism);

	    _get(Object.getPrototypeOf(Prism.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Prism, [{
	    key: 'hightlight',
	    value: function hightlight() {
	      window.Prism.highlightElement(this.refs.code);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.hightlight();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.hightlight();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var preClassName = 'line-numbers';

	      if (this.props.noShadow) {
	        preClassName += ' no-shadow';
	      }

	      return _react2['default'].createElement(
	        'pre',
	        { className: preClassName, 'data-bash-mode': this.props.bashMode },
	        _react2['default'].createElement(
	          'code',
	          { ref: 'code', className: this.props.className },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Prism;
	})(_react2['default'].Component);

	exports['default'] = Prism;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Prism.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(105);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var defaultProps = {
	  status: { loading: false, error: null },
	  spinner: _Spinner2['default'],
	  errorComponent: 'h1'
	};

	var ServiceStatus = (function (_React$Component) {
	  _inherits(ServiceStatus, _React$Component);

	  function ServiceStatus() {
	    _classCallCheck(this, ServiceStatus);

	    _get(Object.getPrototypeOf(ServiceStatus.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ServiceStatus, [{
	    key: 'message',
	    value: function message() {
	      switch (this.httpStatus) {
	        case '400':
	          return 'Bad request';
	        case '401':
	          return 'YOU ARE NOT AUTHORIZED!';
	        case '404':
	          return 'Resource not found';
	        default:
	          return 'Service Down';
	      }
	    }
	  }, {
	    key: 'noRealError',
	    value: function noRealError() {
	      var error = this.props.status.error;

	      if (!error || !error.hasOwnProperty('http_status')) {
	        return true;
	      }

	      this.httpStatus = error.http_status.toString();

	      return this.httpStatus === '409' || this.httpStatus === '422';
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren(children) {
	      if (!children) {
	        return _react2['default'].createElement('noscript');
	      }

	      if (children.length) {
	        return _react2['default'].createElement('div', null, children);
	      }

	      return children;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var status = _props.status;
	      var children = _props.children;
	      var errorComponent = _props.errorComponent;

	      if (status.loading) {
	        return _react2['default'].createElement(this.props.spinner, null);
	      }

	      if (this.noRealError()) {
	        return this.renderChildren(children);
	      }

	      return _react2['default'].createElement(errorComponent, null, this.message());
	    }
	  }]);

	  return ServiceStatus;
	})(_react2['default'].Component);

	ServiceStatus.defaultProps = defaultProps;

	exports['default'] = ServiceStatus;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ServiceStatus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Spinner = (function (_React$Component) {
	  _inherits(Spinner, _React$Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    _get(Object.getPrototypeOf(Spinner.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'p',
	        { className: 'text-center' },
	        _react2['default'].createElement('img', { src: '/imgs/spiffygif_30x30.gif' })
	      );
	    }
	  }]);

	  return Spinner;
	})(_react2['default'].Component);

	exports['default'] = Spinner;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Spinner.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 139:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainContainer":"style__mainContainer___2yKl8","github_icon":"style__github_icon___3FD9Z"};

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(13);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(66);

	var _DOMUtils = __webpack_require__(65);

	var _deprecate = __webpack_require__(53);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }

	  _DOMUtils.addEventListener(window, 'beforeunload', listener);

	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);

	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];

	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;

	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }

	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);

	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          _warning2['default'](false, 'listenBeforeUnload only works in DOM environments');
	        }
	      }

	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }

	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);

	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }

	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,

	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}

	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(73);

	var LiLink = _react2['default'].createClass({
	  displayName: 'LiLink',

	  mixins: [_reactRouter.History],

	  render: function render() {
	    var isActive = this.history.isActive(this.props.to, this.props.query);

	    if (this.props.to === '/') {
	      isActive = window.appConfig.baseHref === location.pathname;
	    }

	    return _react2['default'].createElement(
	      'li',
	      { className: isActive ? 'active' : '' },
	      _react2['default'].createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }))
	    );
	  }

	});

	exports['default'] = LiLink;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LiLink.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	    return oldFunction.bind(this).apply(undefined, args.concat([this.props]));
	  };

	  return descriptor;
	}

	exports["default"] = injectProps;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "injectProps.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function killEvent(target, name, descriptor) {
	  var oldHandler = target;

	  function eventCanceler() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    args[0].stopPropagation();
	    args[0].preventDefault();

	    oldHandler.apply(this, args);
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "killEvent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(18);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(38);

	var _ExecutionEnvironment = __webpack_require__(66);

	var _DOMUtils = __webpack_require__(65);

	var _DOMStateStorage = __webpack_require__(146);

	var _createDOMHistory = __webpack_require__(147);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory(options) {
	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');

	  var isSupported = _DOMUtils.supportsHistory();

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    return history.createLocation(path, state, undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (isSupported) {
	        window.history.pushState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.href = path;
	      }
	    } else {
	      // REPLACE
	      if (isSupported) {
	        window.history.replaceState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.replace(path);
	      }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(13);

	var _warning2 = _interopRequireDefault(_warning);

	var _deprecate = __webpack_require__(53);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _Actions = __webpack_require__(38);

	function extractPath(string) {
	  var match = string.match(/https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

	  return string.substring(match[0].length);
	}

	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  path = extractPath(path);

	  var pathname = path;
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = _deprecate2['default'](createLocation, 'Calling createLocation statically is deprecated; instead call the history.createLocation method - see docs/Location.md');
	module.exports = exports['default'];

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(53);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(152);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(53);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(87);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createBrowserHistory = __webpack_require__(299);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(148);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(150);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _useBasename2 = __webpack_require__(151);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(152);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(87);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(38);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _createLocation2 = __webpack_require__(300);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	exports.createLocation = _createLocation3['default'];

	var _enableBeforeUnload2 = __webpack_require__(301);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(302);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var FormExample = _react2['default'].createClass({
	  displayName: 'FormExample',

	  getInitialState: function getInitialState() {
	    return {
	      user: {
	        id: 1,
	        firstName: 'John',
	        lastName: 'Snow',
	        errors: {
	          firstName: ['is taken']
	        }
	      }
	    };
	  },

	  onChange: function onChange(user) {
	    this.setState({ user: user });
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { Form } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              '"data" and "onChange" props are propagated to its children'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(
	              _src.Form,
	              { data: this.state.user, onChange: this.onChange },
	              _react2['default'].createElement(_src.Input, { field: 'firstName' }),
	              _react2['default'].createElement(_src.Input, { field: 'lastName' }),
	              _react2['default'].createElement(
	                'span',
	                null,
	                this.state.user.firstName,
	                ' ',
	                this.state.user.lastName
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const App = React.createClass({\n  getInitialState() {\n    return {\n      user: {\n        id: 1,\n        firstName: \'John\',\n        lastName: \'Snow\',\n        errors: {\n          firstName: [\'is taken\'],\n        },\n      },\n    };\n  },\n\n  onChange(user) { this.setState({ user }); },\n\n  render() {\n    return (\n      <Form data={ this.state.user } onChange={ this.onChange }>\n        <Input field="firstName" />\n        <Input field="lastName" />\n        <span>{ this.state.user.firstName } { this.state.user.lastName }</span>\n      </Form>\n    );\n  },\n});'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = FormExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FormExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var Profile1 = (function (_React$Component) {
	  _inherits(Profile1, _React$Component);

	  function Profile1() {
	    _classCallCheck(this, Profile1);

	    _get(Object.getPrototypeOf(Profile1.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(Profile1, [{
	    key: 'render',
	    decorators: [_src.injectProps],
	    value: function render(_ref) {
	      var firstName = _ref.firstName;
	      var lastName = _ref.lastName;
	      var email = _ref.email;

	      return _react2['default'].createElement(
	        'p',
	        null,
	        firstName,
	        ' ',
	        lastName,
	        ' - ',
	        email
	      );
	    }
	  }]);

	  return Profile1;
	})(_react2['default'].Component);

	var Profile2 = (function (_React$Component2) {
	  _inherits(Profile2, _React$Component2);

	  function Profile2() {
	    _classCallCheck(this, Profile2);

	    _get(Object.getPrototypeOf(Profile2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(Profile2, [{
	    key: 'fullName',
	    decorators: [_src.injectProps],
	    value: function fullName(seperator, _ref2) {
	      var firstName = _ref2.firstName;
	      var lastName = _ref2.lastName;

	      return lastName + seperator + firstName;
	    }
	  }, {
	    key: 'render',
	    decorators: [_src.injectProps],
	    value: function render(_ref3) {
	      var email = _ref3.email;

	      return _react2['default'].createElement(
	        'p',
	        null,
	        this.fullName(', '),
	        ' - ',
	        email
	      );
	    }
	  }]);

	  return Profile2;
	})(_react2['default'].Component);

	var Profile3 = (function (_React$Component3) {
	  _inherits(Profile3, _React$Component3);

	  function Profile3() {
	    _classCallCheck(this, Profile3);

	    _get(Object.getPrototypeOf(Profile3.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(Profile3, [{
	    key: 'fullName',
	    value: function fullName(seperator, firstName, lastName) {
	      return firstName + seperator + lastName;
	    }
	  }, {
	    key: 'render',
	    decorators: [_src.injectProps],
	    value: function render(_ref4) {
	      var firstName = _ref4.firstName;
	      var lastName = _ref4.lastName;
	      var email = _ref4.email;

	      return _react2['default'].createElement(
	        'p',
	        null,
	        this.fullName(', ', firstName, lastName),
	        ' - ',
	        email
	      );
	    }
	  }]);

	  return Profile3;
	})(_react2['default'].Component);

	var InjectPropsExample = _react2['default'].createClass({
	  displayName: 'InjectPropsExample',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { injectProps } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Add it right before the method you want to inject your props into'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(Profile1, { firstName: 'John', lastName: 'Snow', email: 'john.snow@gmail.com' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class Profile extends React.Component {\n\n  @injectProps\n  render({ firstName, lastName, email }) {\n    return <p>{ firstName } { lastName } - { email }</p>;\n  }\n\n}\n\n<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Works also, with methods that receive arguments'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(Profile2, { firstName: 'John', lastName: 'Snow', email: 'john.snow@gmail.com' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class Profile extends React.Component {\n  @injectProps\n  fullName(seperator, { firstName, lastName }) {\n    return firstName + seperator + lastName;\n  }\n\n  @injectProps\n  render({ email }) {\n    return <p>{ this.fullName(\', \') } - { email }</p>;\n  }\n}\n\n<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'No need to overuse it: Use it on your render method and pass the necessary props as arguments.'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(Profile3, { firstName: 'John', lastName: 'Snow', email: 'john.snow@gmail.com' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class Profile extends React.Component {\n  fullName(seperator, firstName, lastName) {\n    return firstName + seperator + lastName;\n  }\n\n  @injectProps\n  render({ firstName, lastName, email }) {\n    return <p>{ this.fullName(\', \', firstName, lastName) } - { email }</p>;\n  }\n}\n\n<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = InjectPropsExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "InjectPropsExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var userWithErrors = {
	  id: 1,
	  firstName: 'John',
	  lastName: 'Snow',
	  errors: {
	    firstName: ['is taken']
	  }
	};

	var InputExample = _react2['default'].createClass({
	  displayName: 'InputExample',

	  getInitialState: function getInitialState() {
	    return { user: { id: 1, firstName: 'John', lastName: 'Snow' } };
	  },

	  onChange: function onChange(user) {
	    this.setState({ user: user });
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { Input } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Input, { data: {}, type: 'text' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const App = () => <Input data={ {} } />;'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Custom label and placeholder'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Input, { data: {}, label: 'My field:', placeholder: 'write something will ya' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const App = () => (\n  <Input\n    data={ {} }\n    label="My field:"\n    placeholder="write something will ya"\n  />\n);'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Associate to a data field'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Input, { data: this.state.user, field: 'firstName', onChange: this.onChange }),
	            _react2['default'].createElement(_src.Input, { data: this.state.user, field: 'lastName', onChange: this.onChange }),
	            _react2['default'].createElement(
	              'span',
	              null,
	              this.state.user.firstName,
	              ' ',
	              this.state.user.lastName
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const App = React.createClass({\n  getInitialState() { return { user: { id: 1, firstName: \'John\', lastName: \'Snow\' } }; },\n\n  onChange(user) { this.setState({ user }); },\n\n  render() {\n    return (\n      <div>\n        <Input data={ this.state.user } field="firstName" onChange={ this.onChange } />\n        <Input data={ this.state.user } field="lastName" onChange={ this.onChange } />\n        <span>{ this.state.user.firstName } { this.state.user.lastName }</span>\n      </div>\n    );\n  },\n});'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'No label'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Input, { data: this.state.user, field: 'firstName', label: false })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const App = React.createClass({\n  getInitialState() { return { user: { id: 1, firstName: \'John\', lastName: \'Snow\' } }; },\n\n  onChange(user) { this.setState({ user }); },\n\n  render() {\n    return (\n      <div>\n        <Input data={ this.state.user } field="firstName" label={ false } />\n      </div>\n    );\n  },\n});'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Data has a field with errors'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Input, { data: userWithErrors, field: 'firstName' }),
	            _react2['default'].createElement(_src.Input, { data: userWithErrors, field: 'lastName' })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class App extends React.Component {\n  render() {\n    const user = {\n      id: 1,\n      firstName: \'John\',\n      lastName: \'Snow\',\n      errors: {\n        firstName: [\'is taken\'],\n      },\n    };\n\n    return (\n      <div>\n        <Input data={ user } field="firstName" />\n        <Input data={ user } field="lastName" />\n      </div>\n    );\n  }\n}'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = InputExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "InputExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var DownloadButton = (function (_React$Component) {
	  _inherits(DownloadButton, _React$Component);

	  function DownloadButton() {
	    _classCallCheck(this, DownloadButton);

	    _get(Object.getPrototypeOf(DownloadButton.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(DownloadButton, [{
	    key: 'onDownloadClick',
	    decorators: [_src.killEvent],
	    value: function onDownloadClick() {
	      this.props.onDownloadClick();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'button',
	        { onClick: this.onDownloadClick.bind(this) },
	        'click me'
	      );
	    }
	  }]);

	  return DownloadButton;
	})(_react2['default'].Component);

	var App = (function (_React$Component2) {
	  _inherits(App, _React$Component2);

	  function App() {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(App, [{
	    key: 'onDownloadClick',

	    /*eslint-disable */
	    value: function onDownloadClick() {
	      alert('DownloadButton as been clicked!');
	    }
	  }, {
	    key: 'onLinkClick',
	    decorators: [_src.killEvent],
	    value: function onLinkClick() {
	      alert('Link as been clicked!');
	    }

	    /*eslint-enable */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'a',
	        { href: '#', onClick: this.onLinkClick },
	        _react2['default'].createElement(
	          'span',
	          null,
	          'Notice that your browser\'s url is not being updated with a\'s href "#" in it.'
	        ),
	        _react2['default'].createElement(DownloadButton, { onDownloadClick: this.onDownloadClick })
	      );
	    }
	  }]);

	  return App;
	})(_react2['default'].Component);

	var killEventExample = _react2['default'].createClass({
	  displayName: 'killEventExample',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { killEvent } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Add it right before the method you want to stop and prevent its event'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(App, null)
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class DownloadButton extends React.Component {\n  @killEvent\n  onDownloadClick() { this.props.onDownloadClick(); }\n\n  render() {\n    return <button onClick={ this.onDownloadClick.bind(this) }>click me</button>;\n  }\n}\n\nclass App extends React.Component {\n  onDownloadClick() { alert(\'DownloadButton as been clicked!\'); }\n\n  @killEvent\n  onLinkClick() { alert(\'Link as been clicked!\'); }\n\n  render() {\n    return (\n      <a href="#" onClick={ this.onLinkClick }>\n        <span>Notice that your browser\'s URL is not being updated with "#" in it.</span>\n        <DownloadButton onDownloadClick={ this.onDownloadClick } />\n      </a>\n    );\n  }\n}'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = killEventExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "KillEventExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var EmptyCompoment = _react2['default'].createClass({
	  displayName: 'EmptyCompoment',

	  render: function render() {
	    return _react2['default'].createElement(
	      'h2',
	      null,
	      'No data found!'
	    );
	  }
	});
	var ParentComponent = _react2['default'].createClass({
	  displayName: 'ParentComponent',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Parent div'
	      ),
	      this.props.children
	    );
	  }
	});
	var ChildComponent1 = _react2['default'].createClass({
	  displayName: 'ChildComponent1',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      '(',
	      this.props.object.id,
	      ') ',
	      this.props.object.name
	    );
	  }
	});
	var ChildComponent2 = _react2['default'].createClass({
	  displayName: 'ChildComponent2',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      '(',
	      this.props.object.id,
	      ') ',
	      this.props.object.name
	    );
	  }
	});
	var ChildComponent3 = function ChildComponent3(_ref) {
	  var item = _ref.item;
	  var itemSelected = _ref.itemSelected;
	  return _react2['default'].createElement(
	    'li',
	    { className: 'list-group-item', onClick: itemSelected },
	    _react2['default'].createElement(
	      'span',
	      { className: 'badge' },
	      item.id
	    ),
	    item.name
	  );
	};

	var RepeaterExample = _react2['default'].createClass({
	  displayName: 'RepeaterExample',

	  getInitialState: function getInitialState() {
	    return {
	      items: [[{ id: 1, name: 'one' }, { id: 2, name: 'two' }], [], [{ id: 1, name: 'one' }, { id: 2, name: 'two' }]]
	    };
	  },

	  addItem: function addItem(index) {
	    this.state.items[index].push({ id: +new Date(), name: +new Date() });
	    this.setState({ items: this.state.items });
	  },

	  removeItem: function removeItem(index) {
	    this.state.items[index].pop();
	    this.setState({ items: this.state.items });
	  },

	  handleClick: function handleClick(item) {
	    /*eslint-disable */
	    alert('item ' + item.id + ' has been clicked!');
	    /*eslint-enable */
	  },

	  render: function render() {
	    var _this = this;

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { Repeater } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode: requires \'data\' and \'childComponent\' props'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Repeater, {
	              data: [{ id: 1, name: 'one' }, { id: 2, name: 'two' }],
	              childComponent: ChildComponent1
	            })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class ChildComponent extends React.Component {\n  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Repeater\n        data={ [{ id: 1, name: \'one\' }, { id: 2, name: \'two\' }] }\n        childComponent={ ChildComponent }\n      />\n    );\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'emptyComponent prop'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Repeater, { data: this.state.items[1], emptyComponent: EmptyCompoment })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class EmptyCompoment extends React.Component {\n  render() { return <h2>No data found!</h2>; },\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Repeater\n        data={ [] }\n        emptyComponent={ EmptyCompoment }\n      />\n    );\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'pull-left panel-title' },
	              'parentComponent prop'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'pull-right' },
	              _react2['default'].createElement(
	                'button',
	                { onClick: this.addItem.bind(null, 0) },
	                'add and item'
	              ),
	              _react2['default'].createElement(
	                'button',
	                { onClick: this.removeItem.bind(null, 0) },
	                'remove an item'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Repeater, {
	              data: this.state.items[0],
	              childComponent: ChildComponent2,
	              parentComponent: ParentComponent
	            })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class ParentComponent extends React.Component {\n  render() { return <div><h2>Parent div</h2>{ this.props.children }</div>; },\n}\n\nclass ChildComponent extends React.Component {\n  render() { return <div>({ this.props.object.id }) { this.props.object.name }</div>; },\n}\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Repeater\n        data={ [{ id: 1, name: \'one\' }, { id: 2, name: \'two\' }] }\n        childComponent={ ChildComponent }\n        parentComponent={ ParentComponent }\n      />\n    );\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading clearfix' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'pull-left panel-title' },
	              'Full example'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'pull-right' },
	              _react2['default'].createElement(
	                'button',
	                { onClick: this.addItem.bind(null, 2) },
	                'add and item'
	              ),
	              _react2['default'].createElement(
	                'button',
	                { onClick: this.removeItem.bind(null, 2) },
	                'remove an item'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Repeater, {
	              data: this.state.items[2],
	              emptyComponent: function () {
	                return _react2['default'].createElement(
	                  'div',
	                  { className: 'alert alert-warning' },
	                  'no results here!'
	                );
	              },
	              childComponent: function (_ref2) {
	                var object = _ref2.object;
	                return _react2['default'].createElement(ChildComponent3, { item: object, itemSelected: _this.handleClick.bind(_this, object) });
	              },
	              parentComponent: 'ul',
	              clasName: 'list-group'
	            })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'const ChildComponent ({ item, itemSelected }) => (\n  <li className="list-group-item" onClick={ itemSelected }><span className="badge">{ item.id }</span>{ item.name }</li>\n);\n\nclass App extends React.Component {\n  handleClick(item) { alert(\'item \' + item.id + \' has been clicked!\'); },\n\n  render() {\n    return (\n      <Repeater\n        data={ [{ id: 1, name: \'one\' }, { id: 2, name: \'two\' }] }\n        emptyComponent={ () => <div className="alert alert-warning">no results here!</div> }\n        childComponent={ ({ object }) => <ChildComponent item={ object } itemSelected={ this.handleClick.bind(this, object) }/> }\n        parentComponent={ \'ul\' }\n        clasName="list-group"\n      />\n    );\n  }\n}'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = RepeaterExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RepeaterExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var loadingData = [];
	loadingData.loading = true;

	var failedData = [];
	failedData.error = { http_status: 401 };

	var ServiceStatusExample = _react2['default'].createClass({
	  displayName: 'ServiceStatusExample',

	  defaultData: function defaultData() {
	    return [{ id: 1, name: '1' }, { id: 2, name: '2' }];
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { ServiceStatus } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            '!',
	            _react2['default'].createElement(_src.ServiceStatus, null),
	            '!',
	            _react2['default'].createElement('br', null),
	            '!',
	            _react2['default'].createElement(
	              _src.ServiceStatus,
	              null,
	              _react2['default'].createElement(
	                'p',
	                null,
	                'Hello'
	              ),
	              _react2['default'].createElement(
	                'p',
	                null,
	                'world'
	              )
	            ),
	            '!'
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class App extends React.Component {\n  render() {\n    return (\n      <div>\n        !<ServiceStatus />!\n        <br/>\n        !<ServiceStatus>\n          <p>Hello</p>\n          <p>world</p>\n        </ServiceStatus>!\n      </div>\n    );\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'if your data array is being updated on a remote request'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(
	              _src.ServiceStatus,
	              { status: loadingData },
	              _react2['default'].createElement(
	                'span',
	                null,
	                'Hello world'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class App extends React.Component {\n  render() {\n    const loadingData = [];\n    loadingData.loading = true;\n\n    return <ServiceStatus status={ loadingData }><span>Hello world</span></ServiceStatus>;\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'if your data array came from a remote request and has errors'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(
	              _src.ServiceStatus,
	              { status: failedData },
	              _react2['default'].createElement(
	                'span',
	                null,
	                'Hello world'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'class App extends React.Component {\n  render() {\n    const failedData = [];\n    failedData.error = { http_status: 401 };\n\n    return <ServiceStatus status={ failedData }><span>Hello world</span></ServiceStatus>;\n  }\n}'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Using ServiceStatus has a label or a span'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.ServiceStatus, { errorComponent: 'div', status: failedData }),
	            _react2['default'].createElement('br', null),
	            _react2['default'].createElement(_src.ServiceStatus, { errorComponent: 'span', status: failedData })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              '<ServiceStatus errorComponent={ \'div\' } status={ failedData } />\n<ServiceStatus errorComponent={ \'span\' } status={ failedData } />'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = ServiceStatusExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ServiceStatusExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var SpinnerExample = _react2['default'].createClass({
	  displayName: 'SpinnerExample',

	  defaultData: function defaultData() {
	    return [{ id: 1, name: '1' }, { id: 2, name: '2' }];
	  },

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _Prism2['default'],
	        { className: 'language-jsx' },
	        'import { Spinner } from \'relpers\';'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'section',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src.Spinner, null)
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'label label-default' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              '<Spinner />'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = SpinnerExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SpinnerExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LiLink = __webpack_require__(206);

	var _LiLink2 = _interopRequireDefault(_LiLink);

	var _reactRouter = __webpack_require__(73);

	var ApiDocs = _react2['default'].createClass({
	  displayName: 'ApiDocs',

	  mixins: [_reactRouter.History],

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { id: 'top' },
	      _react2['default'].createElement(
	        'p',
	        null,
	        ' '
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'container' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-xs-3 ascii' },
	            this.renderSidebar()
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-md-9' },
	            this.props.children || this.renderHome()
	          )
	        )
	      )
	    );
	  },

	  renderHome: function renderHome() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'jumbotron' },
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'Relpers API'
	      ),
	      _react2['default'].createElement(
	        'h2',
	        { className: 'lead' },
	        'This API documentation example page, ilustrates how you can take advantage of this Single Page App created for you to test your React Component and actually use it to document your work and publish it on the Web.'
	      )
	    );
	  },

	  renderSidebar: function renderSidebar() {
	    return _react2['default'].createElement(
	      'ul',
	      { className: 'ascii fixed' },
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'span',
	          null,
	          'Relpers'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/form' },
	            'Form'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/input' },
	            'Input'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/spinner' },
	            'Spinner'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/repeater' },
	            'Repeater'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/kill_event' },
	            'killEvent'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/inject_props' },
	            'injectProps'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/service_status' },
	            'ServiceStatus'
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = ApiDocs;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(36);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(22);

	var Home = (function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'jumbotron' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-md-7 text-center' },
	                _react2['default'].createElement(
	                  'h1',
	                  null,
	                  _src.config.name
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  { className: 'lead' },
	                  _src.config.description
	                )
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-md-5 jumbotron-side text-center' },
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  ' '
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  this.repositoryLink()
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  _react2['default'].createElement(
	                    'strong',
	                    null,
	                    'Version'
	                  ),
	                  ' ',
	                  _src.config.version
	                )
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'Getting started:'
	          ),
	          _react2['default'].createElement(
	            _Prism2['default'],
	            { className: 'language-ruby', noShadow: true, bashMode: true },
	            'npm install ',
	            _src.config.name,
	            ' --save'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'or'
	          ),
	          _react2['default'].createElement(
	            _Prism2['default'],
	            { className: 'language-ruby', noShadow: true, bashMode: true },
	            'npm install git+https://git@github.com:',
	            _src.config.author || '<package.json:author>',
	            '/',
	            _src.config.name || '<package.json:name>',
	            '.git#master --save'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (_src.config.repository) {
	        props.href = _src.config.repository.url;
	      }

	      if (props.href) {
	        props.href += '/releases';
	        props.target = '_blank';
	      } else {
	        props.href = '#';
	        props.onClick = function (event) {
	          event.preventDefault();

	          /*eslint-disable */
	          alert('You might want to fill in the blanks of your repository details listed on the package.json');
	          /*eslint-enable */
	        };
	      }

	      return _react2['default'].createElement(
	        'a',
	        _extends({}, props, { className: 'btn btn-success btn-lg' }),
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-download-alt' }),
	        ' Download'
	      );
	    }
	  }]);

	  return Home;
	})(_react2['default'].Component);

	exports['default'] = Home;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(22);

	var author = '<package.json:author>';

	if (_src.config.author) {
	  author = _src.config.author;
	}

	var Footer = (function (_React$Component) {
	  _inherits(Footer, _React$Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'footer',
	        { className: 'container' },
	        _react2['default'].createElement(
	          'center',
	          null,
	          '© ',
	          _react2['default'].createElement(
	            'b',
	            null,
	            author
	          ),
	          ' ',
	          new Date().getFullYear()
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          ' '
	        )
	      );
	    }
	  }]);

	  return Footer;
	})(_react2['default'].Component);

	exports['default'] = Footer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LiLink = __webpack_require__(206);

	var _LiLink2 = _interopRequireDefault(_LiLink);

	var _stylesStyleCss = __webpack_require__(139);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(103);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _src = __webpack_require__(22);

	var Header = (function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, _Header);

	    _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'nav',
	        { className: 'navbar navbar-inverse navbar-fixed-top' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'navbar-header' },
	            _react2['default'].createElement(
	              'button',
	              { className: 'navbar-toggle collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '.select2-navbar-collapse' },
	              _react2['default'].createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              _react2['default'].createElement('span', { className: 'icon-bar' }),
	              _react2['default'].createElement('span', { className: 'icon-bar' }),
	              _react2['default'].createElement('span', { className: 'icon-bar' })
	            ),
	            _react2['default'].createElement(
	              'a',
	              { href: '', className: 'navbar-brand' },
	              'Relpers'
	            )
	          ),
	          _react2['default'].createElement(
	            'nav',
	            { className: 'collapse navbar-collapse select2-navbar-collapse', role: 'navigation' },
	            _react2['default'].createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              _react2['default'].createElement(
	                _LiLink2['default'],
	                { to: '/' },
	                'Home'
	              ),
	              _react2['default'].createElement(
	                _LiLink2['default'],
	                { to: '/api_docs' },
	                'API DOCS'
	              )
	            ),
	            _react2['default'].createElement(
	              'ul',
	              { className: 'nav navbar-nav navbar-right' },
	              _react2['default'].createElement(
	                'li',
	                null,
	                this.repositoryLink()
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (_src.config.repository) {
	        props.href = _src.config.repository.url;
	      }

	      if (props.href) {
	        props.target = '_blank';
	      } else {
	        props.href = '#';
	        props.onClick = function (event) {
	          event.preventDefault();

	          /*eslint-disable */
	          alert('You might want to fill in the blanks of your repository details listed on the package.json');
	          /*eslint-enable */
	        };
	      }

	      return _react2['default'].createElement(
	        'a',
	        props,
	        _react2['default'].createElement('img', { styleName: 'github_icon', src: 'imgs/github.png' }),
	        ' GitHub'
	      );
	    }
	  }]);

	  var _Header = Header;
	  Header = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(Header) || Header;
	  return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(444);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(443);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _stylesStyleCss = __webpack_require__(139);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(103);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, _App);

	    _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_Header2['default'], null),
	        _react2['default'].createElement(
	          'div',
	          { styleName: 'mainContainer' },
	          this.props.children
	        ),
	        _react2['default'].createElement(_Footer2['default'], null)
	      );
	    }
	  }]);

	  var _App = App;
	  App = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(App) || App;
	  return App;
	})(_react2['default'].Component);

	exports['default'] = App;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NotFound = function NotFound() {
	  return React.createElement(
	    "div",
	    { className: "jumbotron container" },
	    React.createElement(
	      "h1",
	      null,
	      "404 Not Found"
	    )
	  );
	};

	exports["default"] = NotFound;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFound.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routes = __webpack_require__(448);

	var _routes2 = _interopRequireDefault(_routes);

	exports['default'] = {
	  routes: _routes2['default']
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsHome = __webpack_require__(442);

	var _componentsHome2 = _interopRequireDefault(_componentsHome);

	var _componentsLayout = __webpack_require__(445);

	var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

	var _componentsApiDocs = __webpack_require__(441);

	var _componentsApiDocs2 = _interopRequireDefault(_componentsApiDocs);

	var _componentsNotFound = __webpack_require__(446);

	var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

	var _componentsApiDocsFormExample = __webpack_require__(434);

	var _componentsApiDocsFormExample2 = _interopRequireDefault(_componentsApiDocsFormExample);

	var _componentsApiDocsInputExample = __webpack_require__(436);

	var _componentsApiDocsInputExample2 = _interopRequireDefault(_componentsApiDocsInputExample);

	var _componentsApiDocsSpinnerExample = __webpack_require__(440);

	var _componentsApiDocsSpinnerExample2 = _interopRequireDefault(_componentsApiDocsSpinnerExample);

	var _componentsApiDocsRepeaterExample = __webpack_require__(438);

	var _componentsApiDocsRepeaterExample2 = _interopRequireDefault(_componentsApiDocsRepeaterExample);

	var _componentsApiDocsKillEventExample = __webpack_require__(437);

	var _componentsApiDocsKillEventExample2 = _interopRequireDefault(_componentsApiDocsKillEventExample);

	var _componentsApiDocsInjectPropsExample = __webpack_require__(435);

	var _componentsApiDocsInjectPropsExample2 = _interopRequireDefault(_componentsApiDocsInjectPropsExample);

	var _componentsApiDocsServiceStatusExample = __webpack_require__(439);

	var _componentsApiDocsServiceStatusExample2 = _interopRequireDefault(_componentsApiDocsServiceStatusExample);

	var routes = {
	  component: _componentsLayout2['default'],
	  childRoutes: [{
	    path: '/',
	    component: _componentsHome2['default']
	  }, {
	    path: 'api_docs',
	    component: _componentsApiDocs2['default'],
	    childRoutes: [{
	      path: 'form',
	      component: _componentsApiDocsFormExample2['default']
	    }, {
	      path: 'input',
	      component: _componentsApiDocsInputExample2['default']
	    }, {
	      path: 'spinner',
	      component: _componentsApiDocsSpinnerExample2['default']
	    }, {
	      path: 'repeater',
	      component: _componentsApiDocsRepeaterExample2['default']
	    }, {
	      path: 'kill_event',
	      component: _componentsApiDocsKillEventExample2['default']
	    }, {
	      path: 'inject_props',
	      component: _componentsApiDocsInjectPropsExample2['default']
	    }, {
	      path: 'service_status',
	      component: _componentsApiDocsServiceStatusExample2['default']
	    }]
	  }, {
	    path: '*',
	    component: _componentsNotFound2['default']
	  }]
	};

	exports['default'] = routes;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(105);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _killEvent = __webpack_require__(208);

	var _killEvent2 = _interopRequireDefault(_killEvent);

	var _injectProps = __webpack_require__(207);

	var _injectProps2 = _interopRequireDefault(_injectProps);

	var _ServiceStatus = __webpack_require__(104);

	var _ServiceStatus2 = _interopRequireDefault(_ServiceStatus);

	var Form = (function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(Form, [{
	    key: 'renderChildren',
	    value: function renderChildren(data, onChange) {
	      if (data.loading) {
	        return _react2['default'].createElement(_Spinner2['default'], null);
	      }

	      return _react2['default'].Children.map(this.props.children, function (child) {
	        return _react2['default'].cloneElement(child, { data: data, onChange: onChange });
	      });
	    }
	  }, {
	    key: 'onSubmit',
	    decorators: [_killEvent2['default']],
	    value: function onSubmit(callback) {
	      callback();
	    }
	  }, {
	    key: 'render',
	    decorators: [_injectProps2['default']],
	    value: function render(_ref) {
	      var data = _ref.data;
	      var onChange = _ref.onChange;
	      var onSubmit = _ref.onSubmit;

	      return _react2['default'].createElement(
	        'form',
	        { onSubmit: this.onSubmit.bind(this, onSubmit) },
	        this.renderChildren(data, onChange),
	        _react2['default'].createElement(_ServiceStatus2['default'], {
	          error: data.error,
	          className: 'label label-danger',
	          errorComponent: 'span'
	        })
	      );
	    }
	  }]);

	  return Form;
	})(_react2['default'].Component);

	exports['default'] = Form;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Form.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var defaultProps = {
	  data: {},
	  type: 'text',
	  field: '',
	  onChange: function onChange() {},
	  className: 'form-control',
	  wrapperClass: '',
	  wrapperErrorClass: 'contains_errors'
	};

	var Input = (function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    _classCallCheck(this, Input);

	    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Input, [{
	    key: 'onChange',
	    value: function onChange(event) {
	      this.props.data[this.props.field] = event.target.value;

	      this.props.onChange(this.props.data);
	    }
	  }, {
	    key: 'renderLabel',
	    value: function renderLabel(_ref) {
	      var field = _ref.field;
	      var label = _ref.label;
	      var labelClass = _ref.labelClass;

	      if (label === false) {
	        return _react2['default'].createElement('noscript', null);
	      }

	      return _react2['default'].createElement(
	        'label',
	        { htmlFor: field, className: labelClass },
	        label || field.charAt(0).toUpperCase() + field.slice(1)
	      );
	    }
	  }, {
	    key: 'renderInput',
	    value: function renderInput() {
	      return _react2['default'].createElement('input', _extends({}, this.props, {
	        name: this.props.field,
	        value: this.props.data[this.props.field],
	        onChange: this.onChange.bind(this)
	      }));
	    }
	  }, {
	    key: 'renderErrors',
	    value: function renderErrors(errors) {
	      return errors.map(function (error, index) {
	        return _react2['default'].createElement(
	          'small',
	          { key: index, style: { display: 'block' }, className: 'label label-danger' },
	          error
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var errors = [];

	      if (this.props.data && this.props.data.errors) {
	        errors = this.props.data.errors[this.props.field] || [];
	      }

	      var errorClass = errors.length ? this.props.wrapperErrorClass : '';

	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.wrapperClass + ' ' + errorClass },
	        this.renderLabel(this.props),
	        this.renderInput(),
	        this.renderErrors(errors)
	      );
	    }
	  }]);

	  return Input;
	})(_react2['default'].Component);

	Input.defaultProps = defaultProps;

	exports['default'] = Input;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Input.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ServiceStatus = __webpack_require__(104);

	var _ServiceStatus2 = _interopRequireDefault(_ServiceStatus);

	var defaultProps = {
	  data: [],
	  childComponent: function childComponent(props) {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      props.object.id
	    );
	  },
	  emptyComponent: function emptyComponent() {
	    return _react2['default'].createElement(
	      'p',
	      null,
	      'No results'
	    );
	  },
	  parentComponent: 'div'
	};

	var Repeater = (function (_React$Component) {
	  _inherits(Repeater, _React$Component);

	  function Repeater() {
	    _classCallCheck(this, Repeater);

	    _get(Object.getPrototypeOf(Repeater.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Repeater, [{
	    key: 'renderParent',
	    value: function renderParent() {
	      if (!this.props.data.length) {
	        return _react2['default'].createElement(this.props.emptyComponent, null);
	      }

	      return _react2['default'].createElement(
	        this.props.parentComponent,
	        this.props,
	        this.renderChildren()
	      );
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this = this;

	      return this.props.data.map(function (object, index) {
	        return _react2['default'].createElement(_this.props.childComponent, { key: index, object: object });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props, {
	        status: this.props.status || this.props.data
	      });

	      return _react2['default'].createElement(_ServiceStatus2['default'], props, this.renderParent());
	    }
	  }]);

	  return Repeater;
	})(_react2['default'].Component);

	Repeater.defaultProps = defaultProps;

	exports['default'] = Repeater;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Repeater.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
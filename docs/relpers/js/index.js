webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(48);

	var _src2 = _interopRequireDefault(_src);

	// Bootstraping your single page app

	var _reactDom = __webpack_require__(16);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(56);

	var _history = __webpack_require__(300);

	window.React = _react2['default'];

	// Configuring Relpers
	// window.appConfig is being populated on public/index.html
	// that in turn is being populated by spa/config/spa.js#appConfig entry.
	_src2['default'].config = window.appConfig;
	var _require = __webpack_require__(440);

	var routes = _require.routes;

	var history = (0, _history.useBasename)(_history.createHistory)({
	  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1)
	});

	_reactDom2['default'].render(_react2['default'].createElement(_reactRouter.Router, { routes: routes, history: history }), document.getElementById('spa'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _killEvent = __webpack_require__(444);

	var _killEvent2 = _interopRequireDefault(_killEvent);

	var _injectProps = __webpack_require__(443);

	var _injectProps2 = _interopRequireDefault(_injectProps);

	var _applyMixin = __webpack_require__(442);

	var _applyMixin2 = _interopRequireDefault(_applyMixin);

	exports['default'] = {
	  killEvent: _killEvent2['default'],
	  injectProps: _injectProps2['default'],
	  applyMixin: _applyMixin2['default']
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 71:
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

	var _ExecutionEnvironment = __webpack_require__(65);

	var _DOMUtils = __webpack_require__(64);

	var _deprecate = __webpack_require__(52);

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

	var _reactRouter = __webpack_require__(56);

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

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(18);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(36);

	var _ExecutionEnvironment = __webpack_require__(65);

	var _DOMUtils = __webpack_require__(64);

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

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(13);

	var _warning2 = _interopRequireDefault(_warning);

	var _deprecate = __webpack_require__(52);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _Actions = __webpack_require__(36);

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

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(52);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(152);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(52);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(88);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createBrowserHistory = __webpack_require__(296);

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

	var _useQueries2 = __webpack_require__(88);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(36);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _createLocation2 = __webpack_require__(297);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	exports.createLocation = _createLocation3['default'];

	var _enableBeforeUnload2 = __webpack_require__(298);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(299);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(71);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _reactRouter = __webpack_require__(56);

	var _src = __webpack_require__(48);

	var GoHomeLink1 = (function (_React$Component) {
	  _inherits(GoHomeLink1, _React$Component);

	  function GoHomeLink1() {
	    _classCallCheck(this, _GoHomeLink1);

	    _get(Object.getPrototypeOf(_GoHomeLink1.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(GoHomeLink1, [{
	    key: 'onLinkClick',
	    value: function onLinkClick(href) {
	      this.history.pushState(null, href);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'button',
	        { onClick: function () {
	            return _this.onLinkClick('/');
	          } },
	        'Go Home'
	      );
	    }
	  }]);

	  var _GoHomeLink1 = GoHomeLink1;
	  GoHomeLink1 = (0, _src.applyMixin)(_reactRouter.History)(GoHomeLink1) || GoHomeLink1;
	  return GoHomeLink1;
	})(_react2['default'].Component);

	var RenderTextMixin = {
	  renderText: function renderText() {
	    return 'Go home';
	  }
	};

	var GoHomeLink2 = (function (_React$Component2) {
	  _inherits(GoHomeLink2, _React$Component2);

	  function GoHomeLink2() {
	    _classCallCheck(this, _GoHomeLink2);

	    _get(Object.getPrototypeOf(_GoHomeLink2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(GoHomeLink2, [{
	    key: 'onLinkClick',
	    value: function onLinkClick(href) {
	      this.history.pushState(null, href);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2['default'].createElement(
	        'button',
	        { onClick: function () {
	            return _this2.onLinkClick('/');
	          } },
	        this.renderText()
	      );
	    }
	  }]);

	  var _GoHomeLink2 = GoHomeLink2;
	  GoHomeLink2 = (0, _src.applyMixin)(_reactRouter.History, RenderTextMixin)(GoHomeLink2) || GoHomeLink2;
	  return GoHomeLink2;
	})(_react2['default'].Component);

	var GoHomeLink3 = (function (_React$Component3) {
	  _inherits(GoHomeLink3, _React$Component3);

	  function GoHomeLink3() {
	    _classCallCheck(this, _GoHomeLink3);

	    _get(Object.getPrototypeOf(_GoHomeLink3.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(GoHomeLink3, [{
	    key: 'onLinkClick',
	    value: function onLinkClick(href) {
	      this.history.pushState(null, href);
	    }
	  }, {
	    key: 'renderText',
	    value: function renderText() {
	      return 'Go home dad';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2['default'].createElement(
	        'button',
	        { onClick: function () {
	            return _this3.onLinkClick('/');
	          } },
	        this.renderText()
	      );
	    }
	  }]);

	  var _GoHomeLink3 = GoHomeLink3;
	  GoHomeLink3 = (0, _src.applyMixin)(_reactRouter.History, RenderTextMixin)(GoHomeLink3) || GoHomeLink3;
	  return GoHomeLink3;
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
	        'import { applyMixin } from \'relpers\';'
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
	            _react2['default'].createElement(GoHomeLink1, null)
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
	              'import { History } from \'react-router\';\n\n@applyMixin(History)\nclass GoHomeLink1 extends React.Component {\n  onLinkClick(href) {\n    this.history.pushState(null, href);\n  }\n\n  render() {\n    return (\n      <button onClick={ () => this.onLinkClick(\'/\') }>\n        Go Home\n      </button>\n    );\n  }\n}'
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
	              'It also accepts mutilple mixins'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(GoHomeLink2, null)
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
	              'import { History } from \'react-router\';\n\nconst RenderTextMixin = {\n  renderText() {\n    return \'Go home\';\n  }\n}\n\n@applyMixin(History, RenderTextMixin)\nclass GoHomeLink2 extends React.Component {\n  onLinkClick(href) {\n    this.history.pushState(null, href);\n  }\n\n  render() {\n    return (\n      <button onClick={ () => this.onLinkClick(\'/\') }>\n        { this.renderText() }\n      </button>\n    );\n  }\n}'
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
	              'Component\'s attributes have precendence over the mixins\''
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(GoHomeLink3, null)
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
	              'import { History } from \'react-router\';\n\nconst RenderTextMixin = {\n  renderText() {\n    return \'Go home\';\n  }\n}\n\n@applyMixin(History, RenderTextMixin)\nclass GoHomeLink3 extends React.Component {\n  onLinkClick(href) {\n    this.history.pushState(null, href);\n  }\n\n  renderText() {\n    return \'Go home dad\';\n  }\n\n  render() {\n    return (\n      <button onClick={ () => this.onLinkClick(\'/\') }>\n        { this.renderText() }\n      </button>\n    );\n  }\n}'
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = killEventExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ApplyMixinExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 432:
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

	var _Prism = __webpack_require__(71);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(48);

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
	    value: function fullName(_ref2, seperator) {
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
	    value: function fullName(firstName, lastName, seperator) {
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
	        this.fullName(firstName, lastName, ', '),
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
	              'class Profile extends React.Component {\n  @injectProps\n  fullName({ firstName, lastName }, seperator) {\n    return firstName + seperator + lastName;\n  }\n\n  @injectProps\n  render({ email }) {\n    return <p>{ this.fullName(\', \') } - { email }</p>;\n  }\n}\n\n<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />'
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
	              'class Profile extends React.Component {\n  fullName(firstName, lastName, seperator) {\n    return firstName + seperator + lastName;\n  }\n\n  @injectProps\n  render({ firstName, lastName, email }) {\n    return <p>{ this.fullName(firstName, lastName, \', \') } - { email }</p>;\n  }\n}\n\n<Profile firstName="John" lastName="Snow" email="john.snow@gmail.com" />'
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

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(71);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(48);

	var DownloadButton1 = (function (_React$Component) {
	  _inherits(DownloadButton1, _React$Component);

	  function DownloadButton1() {
	    _classCallCheck(this, DownloadButton1);

	    _get(Object.getPrototypeOf(DownloadButton1.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(DownloadButton1, [{
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

	  return DownloadButton1;
	})(_react2['default'].Component);

	var App1 = (function (_React$Component2) {
	  _inherits(App1, _React$Component2);

	  function App1() {
	    _classCallCheck(this, App1);

	    _get(Object.getPrototypeOf(App1.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createDecoratedClass(App1, [{
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
	        _react2['default'].createElement(DownloadButton1, { onDownloadClick: this.onDownloadClick })
	      );
	    }
	  }]);

	  return App1;
	})(_react2['default'].Component);

	var DownloadButton2 = function DownloadButton2(_ref) {
	  var onDownloadClick = _ref.onDownloadClick;
	  return _react2['default'].createElement(
	    'button',
	    { onClick: (0, _src.killEvent)(function () {
	        return onDownloadClick();
	      }) },
	    'click me'
	  );
	};

	var App2 = (function (_React$Component3) {
	  _inherits(App2, _React$Component3);

	  function App2() {
	    _classCallCheck(this, App2);

	    _get(Object.getPrototypeOf(App2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(App2, [{
	    key: 'onDownloadClick',

	    /*eslint-disable */
	    value: function onDownloadClick() {
	      alert('DownloadButton as been clicked!');
	    }
	  }, {
	    key: 'onLinkClick',
	    value: function onLinkClick() {
	      alert('Link as been clicked!');
	    }

	    /*eslint-enable */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'a',
	        { href: '#', onClick: (0, _src.killEvent)(function () {
	            return _this.onLinkClick();
	          }) },
	        _react2['default'].createElement(
	          'span',
	          null,
	          'Notice that your browser\'s url is not being updated with a\'s href "#" in it.'
	        ),
	        _react2['default'].createElement(DownloadButton2, { onDownloadClick: this.onDownloadClick })
	      );
	    }
	  }]);

	  return App2;
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
	            _react2['default'].createElement(App1, null)
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
	              'You can use it like a normall function too'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(App2, null)
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
	              'const DownloadButton = ({ onDownloadClick }) => (\n  <button onClick={ killEvent(() => onDownloadClick()) }>click me</button>;\n);\n\nclass App extends React.Component {\n  onDownloadClick() { alert(\'DownloadButton as been clicked!\'); }\n\n  onLinkClick() { alert(\'Link as been clicked!\'); }\n\n  render() {\n    return (\n      <a href="#" onClick={ killEvent(() => this.onLinkClick()) }>\n        <span>Notice that your browser\'s URL is not being updated with "#" in it.</span>\n        <DownloadButton onDownloadClick={ this.onDownloadClick } />\n      </a>\n    );\n  }\n}'
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

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LiLink = __webpack_require__(206);

	var _LiLink2 = _interopRequireDefault(_LiLink);

	var _reactRouter = __webpack_require__(56);

	var ApiDocs = _react2['default'].createClass({
	  displayName: 'ApiDocs',

	  mixins: [_reactRouter.History],

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
	        'Relpers exports an object as its default export, the sidebar on the left ilustrates that object\'s keys.'
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
	            { to: '/api_docs/kill_event' },
	            'killEvent'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/apply_mixin' },
	            'applyMixin'
	          ),
	          _react2['default'].createElement(
	            _LiLink2['default'],
	            { to: '/api_docs/inject_props' },
	            'injectProps'
	          )
	        )
	      )
	    );
	  },

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
	  }

	});

	module.exports = ApiDocs;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Prism = __webpack_require__(71);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(48);

	var Home = function Home() {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'div',
	      { className: 'jumbotron' },
	      React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(
	          'div',
	          { className: 'row' },
	          React.createElement(
	            'div',
	            { className: 'col-md-7 text-center' },
	            React.createElement(
	              'h1',
	              null,
	              _src.config.name
	            ),
	            React.createElement(
	              'p',
	              { className: 'lead' },
	              _src.config.description
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'col-md-5 jumbotron-side text-center' },
	            React.createElement(
	              'p',
	              null,
	              ' '
	            ),
	            React.createElement(
	              'p',
	              null,
	              React.createElement(
	                'a',
	                { target: '_blank', href: _src.config.repository.url + '/releases', className: 'btn btn-success btn-lg' },
	                React.createElement('i', { className: 'glyphicon glyphicon-download-alt' }),
	                'Download'
	              )
	            ),
	            React.createElement(
	              'p',
	              null,
	              React.createElement(
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
	    React.createElement(
	      'div',
	      { className: 'container' },
	      React.createElement(
	        'h2',
	        null,
	        'Getting started:'
	      ),
	      React.createElement(
	        _Prism2['default'],
	        { className: 'language-ruby', noShadow: true, bashMode: true },
	        'npm install ',
	        _src.config.name,
	        ' --save'
	      )
	    )
	  );
	};

	exports['default'] = Home;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Footer = (function (_React$Component) {
	  _inherits(Footer, _React$Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Footer, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "footer",
	        { className: "container text-center" },
	        _react2["default"].createElement(
	          "p",
	          null,
	          " "
	        ),
	        _react2["default"].createElement(
	          "p",
	          null,
	          "This package and this documentation page ",
	          _react2["default"].createElement("br", null),
	          " where made with the help of ",
	          _react2["default"].createElement(
	            "a",
	            { target: "_blank", href: "https://github.com/goncalvesjoao/react-to-commonJS" },
	            "react-to-commonjs"
	          ),
	          "."
	        )
	      );
	    }
	  }]);

	  return Footer;
	})(_react2["default"].Component);

	exports["default"] = Footer;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 437:
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

	var _reactCssModules = __webpack_require__(104);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _src = __webpack_require__(48);

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
	                _react2['default'].createElement(
	                  'a',
	                  { target: '_blank', href: _src.config.repository.url },
	                  _react2['default'].createElement('img', { styleName: 'github_icon', src: 'imgs/github.png' }),
	                  'GitHub'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  var _Header = Header;
	  Header = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(Header) || Header;
	  return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 438:
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

	var _Header = __webpack_require__(437);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(436);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _stylesStyleCss = __webpack_require__(139);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(104);

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

/***/ 439:
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

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routes = __webpack_require__(441);

	var _routes2 = _interopRequireDefault(_routes);

	exports['default'] = {
	  routes: _routes2['default']
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsHome = __webpack_require__(435);

	var _componentsHome2 = _interopRequireDefault(_componentsHome);

	var _componentsLayout = __webpack_require__(438);

	var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

	var _componentsApiDocs = __webpack_require__(434);

	var _componentsApiDocs2 = _interopRequireDefault(_componentsApiDocs);

	var _componentsNotFound = __webpack_require__(439);

	var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

	var _componentsApiDocsKillEventExample = __webpack_require__(433);

	var _componentsApiDocsKillEventExample2 = _interopRequireDefault(_componentsApiDocsKillEventExample);

	var _componentsApiDocsApplyMixinExample = __webpack_require__(431);

	var _componentsApiDocsApplyMixinExample2 = _interopRequireDefault(_componentsApiDocsApplyMixinExample);

	var _componentsApiDocsInjectPropsExample = __webpack_require__(432);

	var _componentsApiDocsInjectPropsExample2 = _interopRequireDefault(_componentsApiDocsInjectPropsExample);

	var routes = {
	  component: _componentsLayout2['default'],
	  childRoutes: [{
	    path: '/',
	    component: _componentsHome2['default']
	  }, {
	    path: 'api_docs',
	    component: _componentsApiDocs2['default'],
	    childRoutes: [{
	      path: 'kill_event',
	      component: _componentsApiDocsKillEventExample2['default']
	    }, {
	      path: 'apply_mixin',
	      component: _componentsApiDocsApplyMixinExample2['default']
	    }, {
	      path: 'inject_props',
	      component: _componentsApiDocsInjectPropsExample2['default']
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

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "applyMixin.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 443:
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

	    return oldFunction.bind(this).apply(undefined, [this.props].concat(args));
	  };

	  return descriptor;
	}

	exports["default"] = injectProps;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "injectProps.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/relpers/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "killEvent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
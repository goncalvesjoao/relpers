'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

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
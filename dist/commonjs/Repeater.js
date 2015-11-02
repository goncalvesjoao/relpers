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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ServiceStatus = require('./ServiceStatus');

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
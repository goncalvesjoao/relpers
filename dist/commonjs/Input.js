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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _killEvent = require('./killEvent');

var _killEvent2 = _interopRequireDefault(_killEvent);

var _injectProps = require('./injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

var _ServiceStatus = require('./ServiceStatus');

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
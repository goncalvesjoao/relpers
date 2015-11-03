'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _killEvent = require('./killEvent');

var _killEvent2 = _interopRequireDefault(_killEvent);

var _injectProps = require('./injectProps');

var _injectProps2 = _interopRequireDefault(_injectProps);

exports['default'] = {
  killEvent: _killEvent2['default'],
  injectProps: _injectProps2['default']
};
module.exports = exports['default'];
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
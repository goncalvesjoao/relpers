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
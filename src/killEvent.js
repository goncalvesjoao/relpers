function killEvent(target, name, descriptor) {
  let oldHandler = target;

  function eventCanceler(...args) {
    args[0].stopPropagation();
    args[0].preventDefault();

    oldHandler.apply(this, args);
  }

  if (typeof target === 'function') { return eventCanceler; }

  oldHandler = descriptor.value;
  descriptor.value = eventCanceler;

  return descriptor;
}

export default killEvent;

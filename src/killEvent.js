function killEvent(target, name, descriptor) {
  let oldHandler = target;

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

export default killEvent;

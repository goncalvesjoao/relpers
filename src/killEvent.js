function killEvent(target, name, descriptor) {

  function eventCanceler(event) {
    event.stopPropagation();
    event.preventDefault();

    return target.apply(this, arguments);
  }

  if (target === 'function') {
    return eventCanceler;
  }

  descriptor.value = eventCanceler;

  return descriptor;
}

export default killEvent;

function killEvent(target, name, descriptor) {

  function eventCanceler(event) {
    event.stopPropagation();
    event.preventDefault();

    return target.apply(this, arguments);
  }

  descriptor.value = eventCanceler;

  return descriptor;
}

export default killEvent;

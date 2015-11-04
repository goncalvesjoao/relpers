function injectProps(target, name, descriptor) {
  const oldFunction = descriptor.value;

  descriptor.value = function propsInjectorFunction(...args) {
    return oldFunction.bind(this)(this.props, ...args);
  };

  return descriptor;
}

export default injectProps;

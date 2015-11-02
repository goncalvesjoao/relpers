function injectProps(target, name, descriptor) {
  const oldFunction = descriptor.value;

  descriptor.value = function propsInjectorFunction(...args) {
    return oldFunction.bind(this)(...args, this.props);
  };

  return descriptor;
}

export default injectProps;

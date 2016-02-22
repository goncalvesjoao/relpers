function injectProps(propertyNames, target, name, descriptor) {
  const originalFunction = descriptor.value;

  if (typeof originalFunction !== 'function') {
    throw new SyntaxError(`@injectProps can only be used on functions, not: ${originalFunction}`);
  }

  return {
    ...descriptor,
    value: function propsInjectorWrapper(...args) {
      const properties = propertyNames.map(propertyName => this[propertyName]);
      const newArgs = properties.concat(args);

      return originalFunction.apply(this, newArgs);
    },
  };
}

function applyInjectProps(...args) {
  return (typeof args[0] === 'object')
    ? injectProps(['props'], ...args)
    : injectProps.bind(null, args);
}

export default applyInjectProps;

function applyMixinBuilder(...mixins) {
  return (target) => {
    // merge array of mixins into one single mixin
    const mixin = Object.assign({}, ...mixins.reverse());

    // apply mixin to the target class
    // and return the mixed class
    return Object.keys(mixin)
      .reduce((targetClass, key) => {
        // get the value
        const value = mixin[key];

        // if the target class has the prop or method
        if (targetClass[key] || targetClass.prototype[key]) {
          // return it untouched
          return targetClass;
        }

        // if the value is a functoin
        if (typeof value === 'function') {
          // add the value to the prototype
          // of the targetClass
          targetClass.prototype[key] = value;
          // return the target class
          return targetClass;
        }

        // add the value as a static prop
        targetClass[key] = value;

        // return the class
        return targetClass;
      }, target);
  };
}

export default applyMixinBuilder;
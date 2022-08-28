export const validation = (reg, value) => {
  return reg.test(value);
};

export const debounce = function (callback) {
  let inDebounce = null;

  return function (...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      callback.apply(this, args);
    }, 700);
  };
};

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

export const cardSum = str =>
  str
    .split('')
    .map(Number)
    .reduce((a, c, i) => {
      if (i % 2 !== 0) {
        const double = c * 2;
        c = double > 9 ? cardSum(`${double}`) : double;
      }

      return a + c;
    });

export const validationCard = (callback, cardNo) => !(callback(cardNo) / 10);

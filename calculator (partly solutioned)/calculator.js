function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
//...
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
//...
function multiply(arr) {
  return arr.reduce((a, b) => a * b);
}

function power(a, b) {
  return Math.pow(a, b);
}

//...
function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (i = a - 1; i >= 1; i--) {
      a = a * i;
    }
    return a;
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

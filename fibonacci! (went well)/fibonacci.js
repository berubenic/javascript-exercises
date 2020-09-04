const fibonacci = function (member) {
  member = parseInt(member);
  if (member <= 0) {
    return "OOPS";
  }

  let firstNumber = 1;
  let secondNumber = 1;

  const sequence = [1, 1];

  for (i = 1; i <= member - 2; i++) {
    let nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
    sequence.push(nextNumber);
  }

  return sequence[member - 1];
};

module.exports = fibonacci;

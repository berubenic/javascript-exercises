const caesar = function (string, shift) {
  const stringToArray = [...string];
  const arrayShift = stringToArray.map(function (letter) {
    let letterCode = letter.charCodeAt();
    let start;
    let end;
    console.log(letterCode);
    if (letterCode >= 65 && letterCode <= 90) {
      start = 65;
      end = 90;
    } else {
      start = 97;
      end = 122;
    }
    if (
      (letterCode >= 65 && letterCode <= 90) ||
      (letterCode >= 97 && letterCode <= 122)
    ) {
      let x = letterCode + shift - start;
      if (x + start > end) {
        x = x % 26;
      }
      if (x < 0) {
        letterCode = x + end + 1;
        console.log(letterCode);
      } else {
        letterCode = x + start;
      }
    }
    letterCode = String.fromCharCode(letterCode);
    return letterCode;
  });
  const stringShifted = arrayShift.join("");
  return stringShifted;
};

module.exports = caesar;

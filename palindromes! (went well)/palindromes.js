const palindromes = function (string) {
  string = string.toLowerCase();
  string = string.replace(/\W|\s/g, "");
  console.log(string);
  newArray = Array.from(string);
  newReverseArray = newArray.reverse();
  newReverseString = newReverseArray.join("");
  if (newReverseString === string) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindromes;

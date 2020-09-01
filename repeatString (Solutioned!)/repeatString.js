const repeatString = function(word, repeat) {
    if (repeat < 0) {
        return "ERROR";
      }
    let string = ""
    for (let i = 0; i < repeat; i++) {
            string += word;
      }
    return string;
  }

module.exports = repeatString

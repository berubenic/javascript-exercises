    const reverseString = function(word) {
        let string = word.split("");
        string = string.reverse();
        string = string.join("")
        return string;
      }

module.exports = reverseString

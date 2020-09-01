const sumAll = function(startNum, endNum) {
    let list = [];
    let bigNum;
    let smallNum;
    if ((startNum || endNum) < 0){
      return "ERROR";
    } else if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
      return "ERROR";
    } else if (startNum > endNum) {
      smallNum = endNum;
      bigNum = startNum;
    } else if (startNum < endNum) {
      smallNum = startNum;
      bigNum = endNum;
    }
    for(let i = smallNum; i <= bigNum; i++) {
      list.push(i);
    } 
    let sum = list.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
    return sum;
  }
module.exports = sumAll

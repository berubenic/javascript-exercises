const removeFromArray = function(array, ...remove) {
  console.log(remove)
  for(let i = 0; i < remove.length; i++) {
    condition = array.includes(remove[i])
    let indexRemove = array.indexOf(remove[i]);
    if (condition === true) {
      array.splice(indexRemove, 1);
    }
  }
  return array;
}

module.exports = removeFromArray

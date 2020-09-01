// farenheit to celsius
const ftoc = function(fTemp) {
  let temp = (fTemp - 32) * (5/9);
  return Math.round(temp *10) / 10;
}
// celsius to fahrenheit
const ctof = function(cTemp) {
  let temp = cTemp * (9/5) + 32;
  return Math.round(temp*10) / 10;
}
module.exports = {
  ftoc,
  ctof
}

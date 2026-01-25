const sumAll = function(low,high) {
  if ((!(Number.isInteger(low))) || (!(Number.isInteger(high))) || (Math.sign(low) === -1) || (Math.sign(high) === -1)){
    return `ERROR`
  }

  const realH = Math.max(low,high)
  const realL = Math.min(low,high)

  let sum = 0
  for (let i = realL ; i <= realH ; i++){
    sum += i
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;

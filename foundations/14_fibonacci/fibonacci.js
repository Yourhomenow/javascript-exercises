const fibonacci = function(num) {
  let fiboArr = [0,1,1]
  // if ((num == 1) || (num == 2)) return 1

  if (num < 0){
    return "OOPS"
  }

  let i = 3
  while (i <= num){
    let cur = fiboArr[i-2] + fiboArr[i-1]
    fiboArr.push(cur)
    i++
  }
  return fiboArr[num]

};

// Do not edit below this line
module.exports = fibonacci;

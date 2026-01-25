const repeatString = function(text,num) {
  arr = []
  if (num < 0){
    return `ERROR`
  } else {
    for (let i = 0 ; i < num ; i++){
      arr.push(text)
    }

    ans = arr.join('')
    return ans
  }
};

// Do not edit below this line
module.exports = repeatString;

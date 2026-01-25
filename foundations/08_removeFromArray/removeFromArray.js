const removeFromArray = function(arr,...removeArr) {
  ans = []
  for (let i = 0; i < arr.length ;i++){
    if (!(removeArr.includes(arr[i]))){
      ans.push(arr[i])
    }
  }

  return ans
};

// Do not edit below this line
module.exports = removeFromArray;

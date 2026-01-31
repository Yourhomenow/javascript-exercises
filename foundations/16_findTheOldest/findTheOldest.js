function getAge(birth,death){
  let yearNow = (new Date).getFullYear()
  if (death !== undefined){
    return death - birth
  } else {
    return yearNow - birth
  }
}


const findTheOldest = function(arr) {

  let sorted = arr.reduce((oldest,current)=>{
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath)

    return oldestAge > currentAge ? oldest : current
  })

  return sorted
};

// Do not edit below this line
module.exports = findTheOldest;

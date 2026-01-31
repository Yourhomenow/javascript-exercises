const palindromes = function (text) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const clearText = text.toLowerCase()
                        .split('')
                        .filter((item)=>{
                          return alphanumerical.includes(item)
                        })
                        .reduce((prev,item)=>{
                          return prev + item
                        },'')
  
  const reversedText = clearText.split('').reverse().join('')

  return clearText === reversedText ? true : false
};

// Do not edit below this line
module.exports = palindromes;

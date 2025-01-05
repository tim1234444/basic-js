const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const alhabet = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  let split = n.split('-')
  arr_two = 0
  for(let i =0; i<split.length;i++){
    let split__section = split[i].split('')
   
    for(let j=0; j<split__section.length;j++){
      
      if (split[i].length == 2 && alhabet.includes(split__section[j])){
        arr_two = arr_two + 1
      } else{
        return false
      }
    }
    
  }
  console.log(arr_two)
  if (split.length ==6 && arr_two ==12){
    return true
  }
  return false
  
}
module.exports = {
  isMAC48Address
};

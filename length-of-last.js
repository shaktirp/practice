// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word in the string. If the last word does not exist, return 0.
// Input: 'this is great'
function lengthOfLast(sentence) {
  var result = 0
  for(var i=0; i<sentence.length; i++) {
    if(sentence[i] == ' ')
      result = 0
    else
      result++
  }
  return result
}

console.log(lengthOfLast('This is great'))
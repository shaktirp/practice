function lettercombo(word) {
  console.log(findCombo('', word, 0))
}

function findCombo(word, chars, count) {
  if(chars.length === 1) {
    console.log(word + chars)
    count++
  } else {
    chars.split('').forEach(function(c, i) {
      count = findCombo(word + c, chars.substr(0,i) + chars.substr(i+1), count)
    })
  }
  return count
}

lettercombo('abc')

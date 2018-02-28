function anagramComparison(word1, word2) {
  var obj = {}
  word1.split('').forEach(function(char) {
    if (obj[char]) {
      obj[char] = obj[char] + 1
    } else {
      obj[char] = 1
    }
  })

  word2.split('').forEach(function(char) {
    if (obj[char]) {
      obj[char] = obj[char] + 1
    } else {
      obj[char] = 1
    }
  })

  for (key in obj) {
    if(obj[key] % 2 !== 0) {
      return false
    }
  }
  return true
}

function findCombinations(word) {
  if(word.length) {
    var wordArr = word.split('')
    wordArr.forEach(function(c,i) {
      console.log(c)
      findCombinations(wordArr.slice(0,i).join('') + wordArr.slice(i+1).join(''))
    })
    console.log('---')
  }
}

findCombinations('tes')

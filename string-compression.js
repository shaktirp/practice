function compressString(S) {
  var count = '',
      result = ''
  for(i in S) {
    if(S[i] == S[i-1]) {
      count++
    }
    else {
      result += count + S[i]
      count = 1
    }
  }
  result += count
  console.log(result)
}

compressString('aabbbccdeeeee')
function stringToInteger(s) {
  var result = parseInt(s[s.length-1])
  for(i=s.length - 2; i >= 0; i--) {
    console.log(parseInt(s[i]) * (10^i))
    result += parseInt(s[i]) * (10^i)
  }
  console.log(result)
}

stringToInteger('123')
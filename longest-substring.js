function findLongest(string) {
  var op = string[0],
      max = string[0];

  for(var i=1; i<string.length; i++) {
    if(max.indexOf(string[i]) < 0) {
      op += string[i]
    }
    else {
      if(op.length > max.length)
        max = op
      op = string[i]
    }
  }

  console.log(max)
}

findLongest('abcabcbb')

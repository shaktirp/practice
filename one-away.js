function oneAway(s1, s2) {
  if(s1.length > s2.length) {
    for(var i in s1) {
      if(s1[i] != s2[i])
        s2 = s2.substring(0,i) + s1[i] + s2.substring(i,s2.length)
    }
  }
  else if(s1.length < s2.length) {
    for(var i in s1) {
      if(s1[i] != s2[i]) {
        s2 = s2.substring(0,i) + s1.substring(i, s1.length)
      }
    }
  }
  // else {
  //   for(var i in s1) {
  //     if(s1[i] != s2[i]) {
  //       s2 = s2.substring
  //     }
  //   }
  // }

  console.log(s2)
}

oneAway('bl', 'bale')
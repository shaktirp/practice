function findCombo(A, k, start, currLen, used) {
  // console.log(A, k, start, currLen )
  if(currLen == k) {
    var result = ''
    for(var i = 0; i < A.length; i++) {
      if(used[i]) {
        result += A[i]
      }
    }
    console.log(result)
  } else {
    used[start] = true
    findCombo(A, k, start, currLen + 1, used)

    used[start] = false
    findCombo(A, k, start + 1, currLen + 1, used)
  }
}

findCombo([1,2,3,4], 2, 0, 0, [])

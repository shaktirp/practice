function stairsCombo(n) {
  var q = [0]
  var count = 0
  var steps = [1,2,3]

  while(q.length) {
    node = q.shift()

    if(node === n) {
      count++
    }

    steps.forEach(function (i) {
      if(node + i <= n) {
        q.push(node + i)
      }
    })
  }

  console.log(count)
}

stairsCombo(4)

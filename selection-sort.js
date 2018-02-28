Array.prototype.selectionSort = function() {
  for(i=0; i < this.length; i++) {
    // to get minimum that we will exchange with current locations
    min = i

    // Find the min after current location
    for(j = i + 1; j < this.length; j++) {
      if(this[j] < this[min])
        min = j
    }

    // Swap min with the start
    if(i != min) {
      var temp = this[i]
      this[i] = this[min]
      this[min] = temp
    }
  }
}

var a = [2,5,1,9,8,7,3,0]
a.selectionSort()
console.log(a)
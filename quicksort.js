Array.prototype.quicksort = function(left, right) {
  if(this.length > 1) {
    index = this.partition(left, right)
    if(left < index - 1)
      this.quicksort(left, index - 1)
    if(right > index)
      this.quicksort(index, right)
  }
  return this
}

Array.prototype.partition = function(left, right) {
  pivot = this[Math.floor((left + right) / 2)]
  i = left
  j = right

  while(i <= j) {
    while(this[i] < pivot)
      i++

    while(this[j] > pivot)
      j--

    if(i <= j) {
      temp = this[i]
      this[i] = this[j]
      this[j] = temp

      i++
      j--
    }
  }
  return i
}

var a = [2,5,1,9,8,7,3,0]
a.quicksort(0, a.length - 1)
console.log(a)
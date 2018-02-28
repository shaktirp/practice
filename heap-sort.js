var A = [3,6,2,8,1]
var count = 5
var k = 2

function heapSort() {
  heapify(A, count)
  console.log(A)
  var end = count - 1
  while(end > 0) {
    A = swap(A, end, 0)
    end = end -1
    siftDown(A, 0, end)
  }

  console.log('Array', A)
}

function heapify(A, count) {
  var start = Math.floor((count - 2)/2)
  while(start >= 0) {
    siftDown(A, start, count - 1)
    start = start - 1
  }
}

function siftDown(A, start, end) {
  var root = start

  while(root*2+1 <= end) {
    var child = root * 2 + 1

    if(child + 1 <= end && A[child] < A[child + 1])
      child = child + 1
    if(A[root] < A[child]) {
      A = swap(A, root, child)
      root = child
    }
    else
      return
  }
}

function swap(tempA, first, second) {
  var temp = tempA[first]
  tempA[first] = tempA[second]
  tempA[second] = temp
  return tempA
}

heapSort()

// heapSort([3,6,2,8,1], 5)
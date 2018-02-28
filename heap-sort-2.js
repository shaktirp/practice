function heapify(arr, n, i) {
  largest = i
  l = i * 2 + 1
  r = i * 2 + 2

  if(l < n && arr[i] < arr[l])
    largest = l
  if(r < n && arr[largest] < arr[r])
    largest = r

  if(largest != i) {
    temp = arr[largest];
    arr[largest] = arr[i];
    arr[i] = temp;
    heapify(arr, n, largest)
  }
}

function heapsort(arr) {
  n = arr.length

  // Build heap (rearrange array)
  for (i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

  // One by one extract an element from heap
  for (i=n-1; i>=0; i--)
  {
      // Move current root to end
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      heapify(arr, i, 0);
  }
}

arr = [ 12, 11, 13, 5, 6, 7]
heapsort(arr)
n = arr.length
console.log(arr)
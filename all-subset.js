function subset(A, k, start, currLen, used) {
  if(currLen == k) {
    var result = [];
    for(var i = 0; i < A.length; i++) {
      if(used[i]) {
        result.push(A[i]);
      }
    }
    console.log(result);
  }

  if(start == A.length) {
    return;
  }

  // For every index we have two options,
  // 1.. Either we select it, means put true in used[] and make currLen+1
  used[start] = true;
  subset(A, k, start + 1, currLen + 1, used);

  // 2.. OR we dont select it, means put false in used[] and dont increase
  // currLen
  used[start] = false;
  subset(A, k, start + 1, currLen, used);
}

var A = [ 1, 2, 3, 4, 5 ];
var B = [];
subset(A, 3, 0, 0, B);

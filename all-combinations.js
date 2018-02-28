function generateCombo(string, start, result) {
  var A = string.split('');
  if(start == string.length)
    result.indexOf(string) < 0 ? result.push(string) : result.push();
  else {
    for(var i = start; i < string.length; i++) {
      // Swapping
      var temp = A[start];
      A[start] = A[i];
      A[i] = temp;

      // Recursive call
      generateCombo(A.join(''), start+1, result);
    }
  }
}

function main() {
  var result = []
  var input = 'abcd';
  generateCombo(input, 0, result);
  console.log(result, result.length);
}

main()
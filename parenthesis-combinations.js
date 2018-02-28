function generateCombo(string, start, end, result) {
  var A = string.split('');
  if(start == end && checkParenthesis(string))
    result.indexOf(string) < 0 ? result.push(string) : result.push();
  else {
    for(var i = start; i < end; i++) {
      // Swapping
      var temp = A[start];
      A[start] = A[i];
      A[i] = temp;

      // Recursive call
      generateCombo(A.join(''), start+1, end, result);
    }
  }
}

function checkParenthesis(p) {
  copen = 0
  cclose = 0
  for(var i in p) {
    if(p[i] == ')')
      cclose++
    if(p[i] == '(')
      copen++

    if(cclose > copen)
      return false
  }
  return true
}

function main() {
  var result = []
  var input = '((()))';
  generateCombo(input, 0, input.length, result);
  console.log(result, result.length);
}

main()
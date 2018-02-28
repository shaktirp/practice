// You are given a list of strings (e.g. ["cat", "dog", "hat", "apple", "c"] ).
// Write a program that would take as input a string containing a wild card character, like "*at", "**t" (could be "cat", "hat", "bat"), "ca*", etc. and return true if there is a corresponding string in the list, and false otherwise.

var input = ["cat", "dog", "hat", "apple", "c"]

function compareWildcard(input, wildcard) {
  input.forEach( function(word) {
    var match = true;
    if(wildcard.length == word.length) {
      for(var i=0; i<word.length; i++) {
        if(wildcard[i] != '*' && word[i] != wildcard[i]) match = false;
      }
    }
    else match = false;
    if(match) console.log(word);
  });
}

compareWildcard(input, '*at')
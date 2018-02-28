function getMinimalTree(input) {
  var root
  if(input.length) {
    root = {
      value: input[0],
      left: {},
      right: {}
    }
  }

  input.forEach(function(n, i) {
    if(((2*i) + 1) < input.length) {
      root = findNodeAndAdd(root, n, input[((2*i) + 1)])
    }
    if(((2*i) + 2) < input.length) {
      root = findNodeAndAdd(root, n, input[((2*i) + 2)])
    }
  })

  console.log(root)
}

function findNodeAndAdd(node, n, noToAdd) {
  if(node.value == n) {
    if(!node.left) {
      node.left = {
        value: noToAdd,
        left: {},
        right: {}
      }
    } else if (!node.right) {
      node.right = {
        value: noToAdd,
        left: {},
        right: {}
      }
    }
  } else {
    if(node.left) {
      node = findNodeAndAdd(node.left, n, noToAdd)
    }
    if(node.right) {
      node = findNodeAndAdd(node.right, n, noToAdd)
    }
  }
  return node
}

var input = [0,1,2,3,4,5,6,7]

getMinimalTree(input)
// var tree = {
//   value: 0,
//   left: {
//     value: 1,
//     left: {
//       value: 3,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 4,
//       left: {},
//       right: {}
//     }
//   },
//   right: {
//     value: 2,
//     left: {
//       value: 5,
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 6,
//       left: {},
//       right: {}
//     }
//   }
// }

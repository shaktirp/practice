function isBST(input) {
  console.log(traverse(input))
}

function traverse(node) {
  var leftbool = true
  var rightbool = true

  if (node.left.value) {
    if (node.left.value > node.value) {
      leftbool = false
    } else {
      leftbool = traverse(node.left)
    }

  }
  if (node.right.value) {
    if (node.right.value < node.value) {
      rightbool = false
    } else {
      rightbool = traverse(node.right)
    }
  }

  return leftbool && rightbool
}

var example = {
  value: 10,
  left: {
    value: 1,
    left: {
      value: 1,
      left: {},
      right: {}
    },
    right: {
      value: 6,
      left: {},
      right: {}
    }
  },
  right: {
    value: 13,
    left: {},
    right: {
      value: 16,
      left: {},
      right: {}
    }
  }
}

isBST(example)

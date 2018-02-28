var example = {
  value: 10,
  left: {
    value: 2,
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

function recursivePrefix(obj) {
  if(obj.value) {
    console.log(obj.value)
    recursivePrefix(obj.left)
    recursivePrefix(obj.right)
  }
}

function recursiveInfix(obj) {
  if(obj.value) {
    recursiveInfix(obj.left)
    console.log(obj.value)
    recursiveInfix(obj.right)
  }
}

function recursivePostfix(obj) {
  if(obj.value) {
    recursivePostfix(obj.left)
    recursivePostfix(obj.right)
    console.log(obj.value)
  }
}

function iterativePrefix(root) {
  var stack = []
  if (root.value) {
    stack.push(root)
  }
  while(stack.length) {
    var popped = stack.pop()
    if(popped.right.value) {
      stack.push(popped.right)
    }
    if(popped.left.value) {
      stack.push(popped.left)
    }
    console.log(popped.value)
  }
}

function iterativeInfix(root) {
  var stack = []
  stack = addLeftNodes(root, stack)

  while(stack.length) {
    var current = stack.pop()
    console.log(current.value)

    if(current.right.value) {
      stack = addLeftNodes(current.right, stack)
    }
  }

  function addLeftNodes(node, s) {
    while(node.value) {
      s.push(node)
      node = node.left
    }
    return s
  }
}

iterativeInfix(example)

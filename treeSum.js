function sumTree(input) {
  if(input.value) {
    sumTree(input.left)
    sumTree(input.right)
    tempLeftValue = input.left.value ? input.left.value : 0
    tempRightValue = input.right.value ? input.right.value : 0
    tempNewLeftValue = input.left.newValue ? input.left.newValue : 0
    tempNewRightValue = input.right.newValue ? input.right.newValue : 0
    input['newValue'] = tempLeftValue + tempRightValue + tempNewLeftValue + tempNewRightValue
  }
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

sumTree(example)
console.log(example)

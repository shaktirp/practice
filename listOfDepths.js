function getList (input) {
  q = []
  count = 0
  depth = 0
  max = Math.pow(2, depth)
  linkedList = {}

  q.push(input)

  while (q.length) {
    node = q.shift()

    Object.keys(node.left).length !== 0 && q.push(node.left)
    Object.keys(node.right).length !== 0 && q.push(node.right)

    // Create/Update linked list
    if(linkedList[depth]) {
      linkedList[depth] = {
        value: node.value,
        pointer: linkedList[depth]
      }
    } else {
      linkedList[depth] = {
        value: node.value,
        pointer: {}
      }
    }

    count++
    if (max === count) {
      count = 0
      depth++
      max = Math.pow(2, depth)
    }
  }

  console.log(linkedList)
}


var input = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3,
      left: {
        value: 7,
        left: {},
        right: {}
      },
      right: {
        value: 8,
        left: {},
        right: {}
      }
    },
    right: {
      value: 4,
      left: {},
      right: {}
    }
  },
  right: {
    value: 2,
    left: {
      value: 5,
      left: {},
      right: {}
    },
    right: {
      value: 6,
      left: {},
      right: {}
    }
  }
}

getList(input)

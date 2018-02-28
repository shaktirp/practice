function Node(value, left, right) {
  this.value = value
  this.left = left || {}
  this.right = right || {}
}

function test() {
  node = new Node(
    3,
    new Node(
      1,
      new Node(0),
      new Node(2)
    ),
    new Node(
      5,
      new Node(4),
      new Node(6)
    )
  )

  console.log(node)
}

test()

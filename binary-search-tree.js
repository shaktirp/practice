function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function Tree(value) {
  var newNode = new Node(value);
  this.root = newNode;
}

Tree.prototype.insert = function(node, value) {
  var newNode = new Node(value);

  if(value <= node.data) {
    if(node.left)
      this.insert(node.left, value);
    else
      node.left = newNode;
  }
  else {
    if(node.right)
      this.insert(node.right, value);
    else
      node.right = newNode;
  }
  return node;
}

Tree.prototype.inOrder = function(node) {
  if(node) {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
}

function main() {
  var tree = new Tree(5);

  tree.insert(tree.root, 2);
  tree.insert(tree.root, 6);
  tree.insert(tree.root, 3);
  tree.insert(tree.root, 4);
  tree.insert(tree.root, 9);

  tree.inOrder(tree.root);
}

main()
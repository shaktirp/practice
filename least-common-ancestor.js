function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
}

function findPath(root, path, value) {
  if(!root)
    return null;

  path.push(root.data)
  if(root.data == value)
    return true

  if(root.left && findPath(root.left, path, value) ||
    root.right && findPath(root.right, path, value))
    return true;

  path.pop()
}

function main() {
  var tree = new Tree()
  tree.root = new Node(1)
  tree.root.left = new Node(2)
  tree.root.right = new Node(3)
  tree.root.left.left = new Node(4)
  tree.root.left.right = new Node(5)
  tree.root.right.left = new Node(6)
  tree.root.right.right = new Node(7)

  var path1 = []
  var path2 = []
  findPath(tree.root, path1, 4)
  findPath(tree.root, path2, 5)

  var lca
  for(var i=0; i<path1.length && i<path2.length; i++) {
    if(path1[i] == path2[i])
      lca = path1[i]
  }

  console.log(lca)
}

main()
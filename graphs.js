function Node(value, parent) {
  this.data = value;
  if(this.parent)
    this.parent.push(parent)
  else
    this.parent = [parent];
  this.children = [];
}

function Graph(value) {
  var node = new Node(value)
  this.root = node;
}

function dfs(node) {
  node['visited'] = true;
  console.log(node.data)
  node.children.forEach( function(child) {
    if(!child['visited']) {
      child['visited'] = true;
      dfs(child);
    }
  });
}

function bfs(node) {
  // console.log(node.value);
  var queue = []
  queue.push(node)
  node['visited'] = true

  while(queue.length) {
    var current = queue.shift();
    console.log(current.data)

    current.children.forEach( function(child) {
      if(!child['visited']) {
        queue.push(child)
        child['visited'] = true
      }
    });
  }
}


function main() {
  var graph = new Graph(0);

  var node1 = new Node(1, graph.root);
  var node4 = new Node(4, graph.root);
  var node5 = new Node(5, graph.root);

  var node3 = new Node(3, node1);
  node4.parent.push(node1);
  node4.parent.push(node3);

  graph.root.children.push(node1);
  graph.root.children.push(node4);
  graph.root.children.push(node5);

  node1.children.push(node3);
  node1.children.push(node4);

  var node2 = new Node(2, node3);

  node3.children.push(node2);
  node3.children.push(node4);

  node1.parent.push(node2);
  node2.children.push(node1);

  bfs(graph.root);
}

main()
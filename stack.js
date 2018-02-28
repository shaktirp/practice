function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function(value) {
  var node = new Node(value);

  if(!this.top) {
    this.top = node;

    return this.top;
  }

  node.next = this.top;
  this.top = node;

  return this.top;
}

Stack.prototype.pop = function() {
  var head = this.top;

  if(head) {
    this.top = this.top.next;
  }

  return this.top;
}

function main() {
  var s = new Stack()

  s.push(2);
  s.push(3);
  s.push(1);

  s.pop();

  console.log(s.top);
}

main()
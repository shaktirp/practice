function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	this._length = 0;
}

LinkedList.prototype.add = function(value) {
	var node = new Node(value),
		currentNode = this.head;

	if(!currentNode) {
		this.head = node;
		this._length++;

		return node;
	}

	while(currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	this._length++;

	return node;
}

LinkedList.prototype.print = function() {
	var currentNode = this.head
		s = '';

	while(currentNode.next) {
		s = s + currentNode.data + '  -->  ';
		currentNode = currentNode.next;
	}

	s = s + currentNode.data + '  -->  ';

	console.log(s)
}

function main() {
	var ll = new LinkedList()

	ll.add(1);
	ll.add(2);
	ll.add(3);
	ll.add(4);

	ll.print();
}

main()
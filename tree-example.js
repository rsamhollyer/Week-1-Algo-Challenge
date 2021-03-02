/*
 - insertion
 - traversal


 - A binary tree node will look like this :
 {
    value: 5,
    left: (pointer to another node),
    right: (pointer to another node),

 }

tree(binary, red/black, etc.)
look this up: trie (super fancy data structure that is used now for: immutable data structures and search as you type (auto-suggest))
*/

const names = ["smith", "jones", "rose", "martha", "smith", "k-9"];

//Constructor function
function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

Node.prototype.setLeft = function (left) {
	this.left = left;
};

Node.prototype.setRight = function (right) {
	this.right = right;
};

Node.prototype.insert = function (node) {
	//A node is a thing with a value
	// If value is 'less than' this.value, assign it as our.left
	// Else if node.value is 'greater than' this.value, assign it to our right

	if (node.value < this.value) {
		if (this.left) {
			this.left.insert(node);
		} else {
			this.setLeft(node);
		}
	} else if (node.value > this.value) {
		if (this.right) {
			this.right.insert(node);
		} else {
			this.setRight(node);
		}
	} else {
		console.log(`Whoops`);
	}
};

const root = new Node("smith");
root.insert(new Node("jones"));
root.insert(new Node("alex"));
root.insert(new Node("k-9"));
root.insert(new Node("rose"));
root.insert(new Node("martha"));
console.log(root);

//Traversal

Node.prototype.traverse = function () {
	if (this.left) {
		this.left.traverse();
	}
	console.log(this.value);

	if (this.right) {
		this.right.traverse();
	}
	console.log(this.value);
};
root.traverse();

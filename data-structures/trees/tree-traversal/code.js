class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) return undefined;

      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (val === current.value) return current;

      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    let current = this.root;

    while (current) {
      if (current.left && !current.right) {
        let largestInLeft = current.left;

        while (largestInLeft.right) largestInLeft = largestInLeft.right;

        return largestInLeft.value;
      }

      if (current.right && !current.right.left && !current.right.right)
        return current.value;

      current = current.right;
    }
  }

  isBalanced() {
    function checkHeight(node) {
      if (!node) return 0;

      let leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1;

      let rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(this.root) !== -1;
  }

  remove(val) {
    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;

        while (minRight.left) minRight = minRight.left;

        node.value = minRight.value;

        node.right = removeNode(node.right, minRight.value);

        return node;
      }
    }

    this.root = removeNode(this.root, val);
  }

  BFS() {
    const queue = [];
    const data = [];

    queue.push(this.root);

    let node = this.root;

    while (queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    const data = [];

    function treverse(node) {
      if (!node) return;

      data.push(node.value);

      treverse(node.left);
      treverse(node.right);
    }

    treverse(this.root);

    return data; // [10,6,3,8,15,20]
  }
  // final data started from the root element
  DFSPostOrder() {
    const data = [];

    function treverse(node) {
      if (!node) return;

      treverse(node.left);
      treverse(node.right);

      data.push(node.value);
    }

    treverse(this.root);

    return data; // [3,8,6,20,15,10]
  }

  // final data will be sorted asc
  DFSInOrder() {
    const data = [];

    function treverse(node) {
      if (!node) return;

      treverse(node.left);

      data.push(node.value);

      treverse(node.right);
    }

    treverse(this.root);

    return data; // [3,6,8,10,15,20]
  }
}
const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

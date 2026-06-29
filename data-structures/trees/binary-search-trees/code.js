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
}

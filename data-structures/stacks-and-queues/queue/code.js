class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;

    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return removedNode.val;
  }

  peek() {
    if (!this.first) return null;
    return this.first.val;
  }
}

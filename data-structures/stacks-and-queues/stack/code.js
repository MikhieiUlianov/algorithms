class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
    return this;
  }

  pop() {
    if (!this.top) return null;

    const poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;

    this.size--;
    return poppedNode.val;
  }

  peek() {
    if (!this.top) return null;
    return this.top.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // adding tail to the CURRENT item
      this.tail.next = newNode;
      // UPDATE the current active tail
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = temp;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;

    prev.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  shift() {
    if (!this.head) return undefined;

    const toDeleteHead = this.head;

    this.head = toDeleteHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return toDeleteHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (this.length === index) {
      this.push(val);
      return true;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    const newNode = new Node(val);

    let prev = this.get(index - 1);
    const shiftedNode = prev.next;

    prev.next = newNode;
    newNode.next = shiftedNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    // the node we REMOVE
    const removedNode = prev.next;
    // using the next node of the REMOVED item
    prev.next = removedNode.next;

    this.length--;
    return true;
  }

  reverse() {
    if (!this.head || this.length < 2) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

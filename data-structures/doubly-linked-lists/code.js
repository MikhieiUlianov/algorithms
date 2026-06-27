class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      // avoid memory leak
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const poppedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }

    this.length--;

    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let counter = 0;
      let current = this.head;

      while (counter !== index) {
        current = current.next;
        counter++;
      }

      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;

      while (counter !== index) {
        current = current.prev;
        counter--;
      }

      return current;
    }
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

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);

    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.next = afterNode;

    afterNode.prev = newNode;
    newNode.prev = beforeNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return this.pop();

    const toDelete = this.get(index);

    const beforeToDelete = toDelete.prev;
    const afterToDelete = toDelete.next;

    beforeToDelete.next = afterToDelete;
    afterToDelete.prev = beforeToDelete;

    toDelete.next = null;
    toDelete.prev = null;

    this.length--;

    return toDelete;
  }
}

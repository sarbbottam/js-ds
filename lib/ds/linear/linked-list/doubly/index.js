class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(value) {
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }

  addLast(value) {
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  addAt(index, value) {
    let currentIndex = 1;
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentIndex += 1;
        if (currentIndex === index) {
          break;
        }
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.previous = currentNode;
      currentNode.next = newNode;
      this.tail = newNode;
      if (newNode.next) {
        newNode.next.previous = newNode;
        this.tail = newNode.next;
      }
    }
  }

  deleteFirst() {
    if (this.head) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
    }
    if (!this.head) {
      this.tail = null;
    }
  }

  deleteLast() {
    if (this.tail) {
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      }
    }
    if (!this.tail) {
      this.head = null;
    }
  }

  deleteAt(index) {
    let currentIndex = 1;
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentIndex += 1;
        currentNode = currentNode.next;
        if (currentIndex === index) {
          break;
        }
      }
      const previousNode = currentNode.previous;
      const nextNode = currentNode.next;
      if (currentIndex < index) {
        currentNode.previous = null;
        previousNode.next = null;
        this.tail = previousNode;
      } else {
        previousNode.next = nextNode;
        if (nextNode) {
          nextNode.previous = previousNode;
        } else {
          this.tail = previousNode;
        }
        // currentNode.next = null;
        // currentNode.previous = null;
      }
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  getAt(index) {
    if (index) {
      if (!this.head) {
        return null;
      }
      let currentIndex = 1;
      let currentNode = this.head;
      while (currentNode && currentIndex < index) {
        currentIndex += 1;
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  getLength() {
    let length = 0;
    if (!this.head) {
      return length;
    }
    length += 1;
    let currentNode = this.head;
    while (currentNode.next) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  }

  getAtFromLast(index) {
    if (index) {
      if (!this.tail) {
        return null;
      }
      let currentIndex = 1;
      let currentNode = this.tail;
      while (currentNode && currentIndex < index) {
        currentIndex += 1;
        currentNode = currentNode.previous;
      }
      return currentNode;
    }
  }

  deleteNode(node) {
    if (!node) {
      return;
    }

    if (node.next === null) {
      this.deleteLast();
      return;
    }

    if (node.previous === null) {
      this.deleteFirst();
      return;
    }

    const nextNode = node.next;
    const previousNode = node.previous;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    node.previous = null;
    node.next = null;
  }

  traverse() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

LinkedList.Node = Node;

module.exports = LinkedList;

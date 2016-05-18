class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  addFirst(value) {
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addLast(value) {
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  addAt(index, value) {
    let currentIndex = 1;
    if (value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
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
      currentNode.next = newNode;
    }
  }

  deleteFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteLast() {
    if (this.head) {
      let currentNode = this.head;
      let nextNode = currentNode.next;
      // if there is only a single node
      if (!nextNode) {
        this.head = null;
        return;
      }
      while (nextNode.next !== null) {
        currentNode = nextNode;
        nextNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

  deleteAt(index) {
    let currentIndex = 1;
    if (this.head) {
      let currentNode = this.head;
      let previousNode;
      while (currentNode.next !== null) {
        currentIndex += 1;
        if (currentIndex === index) {
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentIndex < index) {
        previousNode.next = null;
      } else {
        const nextNode = currentNode.next;
        currentNode.next = nextNode.next;
      }
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
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
    if (!this.head) {
      return null;
    }
    let desiredIndex = this.getLength() - index;
    let currentNode = this.head;
    while (desiredIndex) {
      desiredIndex -= 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  deleteNode(node) {
    if (!node) {
      return;
    }

    if (node.next === null) {
      this.deleteLast();
      return;
    }

    const nextNode = node.next;
    node.value = nextNode.value;
    node.next = nextNode.next;
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
    return this.head === null;
  }
}

LinkedList.Node = Node;
module.exports = LinkedList;

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

LinkedList.Node = Node;

function LinkedList() {
  let head = null;
  let tail = null;

  this.addFirst = value => {
    if (value) {
      const newNode = new Node(value);
      if (!head) {
        head = newNode;
        tail = newNode;
        return;
      }
      newNode.next = head;
      head.previous = newNode;
      head = newNode;
    }
  };

  this.addLast = value => {
    if (value) {
      const newNode = new Node(value);
      if (!head) {
        head = newNode;
        tail = newNode;
        return;
      }
      newNode.previous = tail;
      tail.next = newNode;
      tail = newNode;
    }
  };

  this.addAt = (index, value) => {
    let currentIndex = 1;
    if (value) {
      const newNode = new Node(value);
      if (!head) {
        head = newNode;
        tail = newNode;
        return;
      }
      let currentNode = head;
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
      tail = newNode;
      if (newNode.next) {
        newNode.next.previous = newNode;
        tail = newNode.next;
      }
    }
  };

  this.deleteFirst = () => {
    if (head) {
      head = head.next;
      if (head) {
        head.previous = null;
      }
    }
    if (!head) {
      tail = null;
    }
  };

  this.deleteLast = () => {
    if (tail) {
      tail = tail.previous;
      if (tail) {
        tail.next = null;
      }
    }
    if (!tail) {
      head = null;
    }
  };

  this.deleteAt = index => {
    let currentIndex = 1;
    if (head) {
      let currentNode = head;
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
        tail = previousNode;
      } else {
        previousNode.next = nextNode;
        if (nextNode) {
          nextNode.previous = previousNode;
        } else {
          tail = previousNode;
        }
        // currentNode.next = null;
        // currentNode.previous = null;
      }
    }
  };

  this.getFirst = () => {
    return head;
  };

  this.getLast = () => {
    return tail;
  };

  this.getAt = index => {
    if (index) {
      if (!head) {
        return null;
      }
      let currentIndex = 1;
      let currentNode = head;
      while (currentNode && currentIndex < index) {
        currentIndex += 1;
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  };

  this.getLength = () => {
    let length = 0;
    if (!head) {
      return length;
    }
    length += 1;
    let currentNode = head;
    while (currentNode.next) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  };

  this.getAtFromLast = index => {
    if (index) {
      if (!tail) {
        return null;
      }
      let currentIndex = 1;
      let currentNode = tail;
      while (currentNode && currentIndex < index) {
        currentIndex += 1;
        currentNode = currentNode.previous;
      }
      return currentNode;
    }
  };

  this.deleteNode = node => {
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
  };

  this.traverse = () => {
    const values = [];
    let currentNode = head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  };

  this.isEmpty = () => head === tail;
}

module.exports = LinkedList;

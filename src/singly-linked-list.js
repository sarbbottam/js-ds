class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

LinkedList.Node = Node;

function LinkedList() {
  let head = null;

  this.addFirst = value => {
    if (value) {
      const newNode = new Node(value);
      if (head) {
        newNode.next = head;
        head = newNode;
      } else {
        head = newNode;
      }
    }
  };

  this.addLast = value => {
    if (value) {
      const newNode = new Node(value);
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  };

  this.addAt = (index, value) => {
    let currentIndex = 1;
    if (value) {
      const newNode = new Node(value);
      let currentNode = head;
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
  };

  this.deleteFirst = () => {
    if (head !== null) {
      head = head.next;
    }
  };

  this.deleteLast = () => {
    if (head !== null) {
      let currentNode = head;
      let nextNode = currentNode.next;
      if (!nextNode) {
        return;
      }
      while (nextNode.next !== null) {
        currentNode = nextNode;
        nextNode = currentNode.next;
      }
      currentNode.next = null;
    }
  };

  this.deleteAt = index => {
    let currentIndex = 1;
    if (head !== null) {
      let currentNode = head;
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
  };

  this.getFirst = () => {
    return head;
  };

  this.getLast = () => {
    let currentNode = head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.getAt = index => {
    let currentIndex = 1;
    let currentNode = head;
    while (currentNode && currentIndex < index) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.getLength = () => {
    let length = 0;
    let currentNode = head;
    if (currentNode !== null) {
      length += 1;
    }
    while (currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  };

  this.getAtFromLast = index => {
    let desiredIndex = this.getLength() - index;
    let currentNode = head;
    desiredIndex -= 1;
    while (desiredIndex) {
      desiredIndex -= 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.deleteNode = node => {
    if (node.next === null) {
      this.deleteLast();
      return;
    }
    const nextNode = node.next;
    node.value = nextNode.value;
    node.next = nextNode.next;
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

  this.isEmpty = () => head === null;
}

module.exports = LinkedList;

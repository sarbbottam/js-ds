class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

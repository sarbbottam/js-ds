function Queue() {
  const queue = [];

  this.getFront = () => {
    if (!this.isEmpty()) {
      return queue[0];
    }
  };

  this.dequeue = () => {
    return queue.shift();
  };

  this.enqueue = value => {
    if (value) {
      queue.push(value);
    }
  };

  this.clear = () => {
    queue.length = 0;
  };

  this.isEmpty = () => queue.length === 0;
}

module.exports = Queue;

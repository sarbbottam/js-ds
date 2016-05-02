function Stack() {
  const stack = [];
  let top = -1;

  this.push = value => {
    if (value) {
      stack.push(value);
      top += 1;
    }
  };

  this.pop = () => {
    if (!this.isEmpty()) {
      top -= 1;
      return stack.pop();
    }
  };

  this.isEmpty = () => top === -1;
}

module.exports = Stack;

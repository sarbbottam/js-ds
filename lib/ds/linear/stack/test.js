const assert = require('chai').assert;
const Stack = require('./');

let stack;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it('should return true if the stack is empty', () => {
    assert.isOk(stack.isEmpty());
  });

  it('should not push if called w/o a value', () => {
    stack.push();
    assert.isNotOk(stack.pop());
  });

  it('should push to stack if called with a value', () => {
    stack.push(1);
    assert.equal(stack.pop(), 1);
  });

  it('should pop the value from the top of the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    assert.equal(stack.pop(), 3);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 1);
    assert.isNotOk(stack.pop());
    assert.isOk(stack.isEmpty());
  });
});

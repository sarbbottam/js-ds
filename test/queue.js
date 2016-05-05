const assert = require('chai').assert;
const Queue = require('../src/queue');

let queue;

describe('Queue', () => {
  beforeEach(() => {
    queue = new Queue();
  });

  it('should return true if the queue is empty', () => {
    assert.isOk(queue.isEmpty());
  });

  it('should not enqueue if called w/o a value', () => {
    queue.enqueue();
    assert.isNotOk(queue.getFront());
  });

  it('should not enqueue at the end of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.dequeue(), 2);
    assert.equal(queue.dequeue(), 3);
  });

  it('should return falsy value on dequeue if the queue is empty', () => {
    assert.isNotOk(queue.dequeue());
  });

  it('should dequeue from the start of the queue', () => {
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
    assert.equal(queue.dequeue(), 3);
    assert.equal(queue.dequeue(), 2);
    assert.equal(queue.dequeue(), 1);
  });

  it('should clear the queue', () => {
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
    queue.clear();
    assert.isOk(queue.isEmpty());
  });

  it('should return falsy value for getFront if the queue is empty', () => {
    assert.isNotOk(queue.getFront());
  });

  it('should return the front value for getFront if the queue is not empty', () => {
    queue.enqueue(3);
    queue.enqueue(2);
    queue.enqueue(1);
    assert.equal(queue.getFront(), 3);
  });
});

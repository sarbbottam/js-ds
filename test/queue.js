const assert = require('assert');
const Queue = require('../src/queue');

const queue = new Queue();

describe('Queue', () => {
  it('operations, isEmpty, getFront, enqueue, dequeue, clear', () => {
    assert.ok(queue.isEmpty());

    queue.enqueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    assert.equal(queue.getFront(), 1);

    queue.dequeue();
    assert.equal(queue.getFront(), 2);

    queue.dequeue();
    assert.equal(queue.getFront(), 3);

    queue.clear();
    assert.equal(queue.getFront(), undefined);
  });
});

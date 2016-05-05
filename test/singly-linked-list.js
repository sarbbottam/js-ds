const assert = require('assert');
const LinkedList = require('../src/singly-linked-list');

const linkedList = new LinkedList();

describe('LinkedList', () => {
  it('operations, addFirst, addLast, addAt, deleteFirst, deleteLast, deleteAt, getFirst, getLast, getAt, deleteNode, traverse', () => {
    assert.ok(linkedList.isEmpty());

    linkedList.deleteFirst();
    linkedList.deleteLast();
    linkedList.deleteAt();

    linkedList.addFirst();
    linkedList.addFirst(3);
    linkedList.addFirst(1);
    assert.deepEqual(linkedList.traverse(), [1, 3]);

    linkedList.addLast();
    linkedList.addLast(4);
    linkedList.addLast(6);
    assert.deepEqual(linkedList.traverse(), [1, 3, 4, 6]);

    linkedList.addAt();
    linkedList.addAt(2, 2);
    linkedList.addAt(5, 5);
    assert.deepEqual(linkedList.traverse(), [1, 2, 3, 4, 5, 6]);

    assert.equal(linkedList.getFirst().value, 1);
    assert.equal(linkedList.getLast().value, 6);

    linkedList.addAt(2, 'B');
    let node = linkedList.getAt(2);
    assert.equal(node.value, 'B');
    linkedList.deleteNode(node);
    assert.deepEqual(linkedList.traverse(), [1, 2, 3, 4, 5, 6]);
    linkedList.addLast('G');
    node = linkedList.getAt(7);
    linkedList.deleteNode(node);
    assert.deepEqual(linkedList.traverse(), [1, 2, 3, 4, 5, 6]);

    assert.equal(linkedList.getAtFromLast(1).value, 6);
    assert.equal(linkedList.getAtFromLast(6).value, 1);
    linkedList.deleteFirst();
    assert.deepEqual(linkedList.traverse(), [2, 3, 4, 5, 6]);

    linkedList.deleteLast();
    assert.deepEqual(linkedList.traverse(), [2, 3, 4, 5]);

    linkedList.deleteAt(3);
    assert.deepEqual(linkedList.traverse(), [2, 3, 5]);

    linkedList.deleteAt(4);
    assert.deepEqual(linkedList.traverse(), [2, 3]);

    linkedList.deleteLast();
    linkedList.deleteLast();
  });
});

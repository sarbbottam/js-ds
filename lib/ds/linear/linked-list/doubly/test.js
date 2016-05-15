const assert = require('chai').assert;
const LinkedList = require('./');

let linkedList;

describe('linked-list', () => {
  describe('doubly', () => {
    beforeEach(() => {
      linkedList = new LinkedList();
    });

    it('should return true if the list is empty', () => {
      assert.isOk(linkedList.isEmpty());
    });

    it('should do nothing for add(First|Last|At) calls w/o an item', () => {
      linkedList.addFirst();
      assert.deepEqual(linkedList.traverse(), []);
      linkedList.addLast();
      assert.deepEqual(linkedList.traverse(), []);
      linkedList.addAt();
      assert.deepEqual(linkedList.traverse(), []);
    });

    it('should add node at the begining of the list', () => {
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      assert.deepEqual(linkedList.traverse(), [1, 2]);
    });

    it('should add node at the end of the list', () => {
      linkedList.addLast(1);
      linkedList.addLast(2);
      // code coverage
      linkedList.addLast(3);
      assert.deepEqual(linkedList.traverse(), [1, 2, 3]);
    });

    it('should add node at desired index', () => {
      linkedList.addAt(1, 1);
      linkedList.addAt(2, 2);
      linkedList.addAt(3, 3);
      linkedList.addLast(5);
      linkedList.addAt(4, 4);
      assert.deepEqual(linkedList.traverse(), [1, 2, 3, 4, 5]);
    });

    it('should do nothing for delete(First|Last) calls on empty list', () => {
      linkedList.deleteFirst();
      linkedList.addFirst(1);
      linkedList.deleteFirst();
      assert.deepEqual(linkedList.traverse(), []);
      linkedList.deleteLast();
      assert.deepEqual(linkedList.traverse(), []);
    });

    it('should do nothing for deleteAt call either on empty list or w/o index', () => {
      linkedList.deleteAt();
      assert.deepEqual(linkedList.traverse(), []);
    });

    it('should delete node at the begining of the list', () => {
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      linkedList.deleteFirst();
      assert.deepEqual(linkedList.traverse(), [2]);
    });

    it('should delete node at the end of the list', () => {
      linkedList.addLast(1);
      linkedList.deleteLast();
      linkedList.addLast(2);
      linkedList.addLast(3);
      linkedList.addLast(4);
      linkedList.deleteLast();
      assert.deepEqual(linkedList.traverse(), [2, 3]);
    });

    it('should delete node at desired index', () => {
      linkedList.addFirst(3);
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      linkedList.deleteAt(3);
      assert.deepEqual(linkedList.traverse(), [1, 2]);
      linkedList.addLast(3);
      linkedList.deleteAt(2);
      assert.deepEqual(linkedList.traverse(), [1, 3]);
      linkedList.deleteAt(4);
      assert.deepEqual(linkedList.traverse(), [1]);
    });

    it('should return falsy value for get(First|Last) calls on empty list', () => {
      assert.isNotOk(linkedList.getFirst());
      assert.isNotOk(linkedList.getLast());
    });

    it('should return falsy value for getAt call either on empty list or w/o index', () => {
      assert.isNotOk(linkedList.getAt());
      assert.isNotOk(linkedList.getAt(1));
    });

    it('should return the first node', () => {
      linkedList.addFirst(1);
      linkedList.addLast(2);
      assert.equal(linkedList.getFirst().value, 1);
    });

    it('should return the last node', () => {
      linkedList.addFirst(1);
      linkedList.addLast(2);
      assert.equal(linkedList.getLast().value, 2);
    });

    it('should return the desired node', () => {
      linkedList.addFirst(3);
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      assert.equal(linkedList.getAt(2).value, 2);
    });

    it('should delete the desired node', () => {
      linkedList.addFirst(3);
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      linkedList.deleteNode();
      linkedList.deleteNode(linkedList.getAt(2));
      assert.deepEqual(linkedList.traverse(), [1, 3]);
      linkedList.deleteNode(linkedList.getAt(1));
      assert.deepEqual(linkedList.traverse(), [3]);
      linkedList.deleteNode(linkedList.getLast());
      assert.deepEqual(linkedList.traverse(), []);
    });

    it('should return the length of the list', () => {
      assert.equal(linkedList.getLength(), 0);
      linkedList.addFirst(3);
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      assert.equal(linkedList.getLength(), 3);
    });

    it('should return the nth node from the last', () => {
      assert.isNotOk(linkedList.getAtFromLast());
      assert.isNotOk(linkedList.getAtFromLast(2));
      linkedList.addFirst(3);
      linkedList.addFirst(2);
      linkedList.addFirst(1);
      assert.equal(linkedList.getAtFromLast(2).value, 2);
    });
  });
});

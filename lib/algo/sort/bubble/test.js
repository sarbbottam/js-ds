const assert = require('chai').assert;
const sort = require('./');

describe('Sort', () => {
  describe('Bubble', () => {
    it('sort the given array', () => {
      assert.deepEqual(sort([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);
      assert.deepEqual(sort(['e', 'c', 'b', 'd', 'a']), ['a', 'b', 'c', 'd', 'e']);
    });
  });
});

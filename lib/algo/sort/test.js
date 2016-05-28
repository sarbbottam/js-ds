const assert = require('chai').assert;
const sorts = {
  bubble: require('./bubble'),
  insertion: require('./insertion'),
  merge: require('./merge'),
  quick: require('./quick'),
  selection: require('./selection')
};

describe('sort', () => {
  Object.keys(sorts).forEach(type => {
    describe(type, () => {
      it('sort the given array', () => {
        assert.deepEqual(sorts[type]([5, 3, 2, 4, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(sorts[type]([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
        assert.deepEqual(sorts[type]([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
        assert.deepEqual(sorts[type](['e', 'c', 'b', 'd', 'a']), ['a', 'b', 'c', 'd', 'e']);
      });
    });
  });
});

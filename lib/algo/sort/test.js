const chai = require('chai');

const expect = chai.expect;
const sorts = {
  bubble: require('./bubble'),
  insertion: require('./insertion'),
  merge: require('./merge'),
  quick: require('./quick'),
  selection: require('./selection')
};

chai.use(require('chai-sorted'));

/*
* Generates a random array
* with the given length and maximum number
*/
function generateRandomArray(length = 100000, max = Number.MAX_SAFE_INTEGER) {
  return [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
}

describe('sort', () => {
  Object.keys(sorts).forEach(type => {
    describe(type, () => {
      it('sort the given array', () => {
        expect(sorts[type](generateRandomArray(1000, 100))).to.be.sorted();
        expect(sorts[type]([5, 3, 2, 4, 1])).to.be.sorted();
        expect(sorts[type]([1, 2, 3, 4, 5])).to.be.sorted();
        expect(sorts[type]([5, 4, 3, 2, 1])).to.be.sorted();
        expect(sorts[type](['e', 'c', 'b', 'd', 'a'])).to.be.sorted();
      });
    });
  });
});

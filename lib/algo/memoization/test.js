const chai = require('chai');
const knapsack = require('./knapsack');

function Item(profit, volume) {
  this.profit = profit;
  this.volume = volume;

  this.getProfit = function () {
    return this.profit;
  };
  this.getVolume = function () {
    return this.volume;
  };
}

const expect = chai.expect;
const items = [
  new Item(12, 2),
  new Item(5, 4),
  new Item(1, 5),
  new Item(56, 23),
  new Item(2, 6),
  new Item(1, 5),
  new Item(12, 8),
  new Item(2, 3)
];

// var items = [...new Array(9)].map(() => new Item(Math.round(Math.random() * 10) + 1, Math.round(Math.random() * 8) + 1))
describe('knapsack', () => {
  it('should return maximum total profit/volume for capacity 7', () => {
    const capacity = 7;
    const res = knapsack(items, capacity);
    expect(res).deep.equal(17);
  });
  it('should return maximum total profit/volume for capacity 3', () => {
    const capacity = 3;
    const res = knapsack(items, capacity);
    expect(res).deep.equal(12);
  });
});

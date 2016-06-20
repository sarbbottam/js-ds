/*
* Solves Knapsack problem: http://www.geeksforgeeks.org/dynamic-programming-set-10-0-1-knapsack-problem/
* It uses Memoization
* O(items.length * capacity)
*/

function createMatrix(x, y) {
  const matrix = [];
  for (let i = 0; i < x; i++) {
    matrix[i] = [...new Array(y)].map(() => -1);
  }
  return matrix;
}

function knapSack(items, residualCapacity, currentIndex = items.length - 1, valuesMatrix = createMatrix(currentIndex + 1, residualCapacity + 1)) {
  if (residualCapacity < 0) {
    return Number.MIN_SAFE_INTEGER;
  }
  if (currentIndex < 0) {
    return 0;
  }
  let currentItem = valuesMatrix[currentIndex][residualCapacity];
  if (currentItem !== -1) {
    return currentItem;
  }
  let taking = (knapSack(items, residualCapacity - items[currentIndex].getVolume(), currentIndex - 1, valuesMatrix) + items[currentIndex].getProfit());
  if (!taking) {
    taking = 0;
  }
  let notTaking = knapSack(items, residualCapacity, currentIndex - 1, valuesMatrix);
  if (!notTaking) {
    notTaking = 0;
  }
  currentItem = Math.max(taking, notTaking);
  return currentItem;
}

module.exports = knapSack;

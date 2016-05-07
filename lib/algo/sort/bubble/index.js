function sort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i += 1) {
    for (let j = i + 1; j < length; j += 1) {
      if (array[j] < array[i]) {
        // using es6 destructuring assignment for swapping variables
        // instead of
        // let temp = array[i];
        // array[i] = array[j];
        // array[j] = temp;
        // refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

module.exports = sort;

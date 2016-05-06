function sort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i += 1) {
    let iMin = i;
    for (let j = i + 1; j < length; j += 1) {
      if (array[j] < array[iMin]) {
        iMin = j;
      }
    }
    // using es6 destructuring assignment for swapping variables
    // instead of
    // let temp = array[iMin];
    // array[iMin] = array[i];
    // array[i] = temp;
    // refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
    [array[iMin], array[i]] = [array[i], array[iMin]];
  }

  return array;
}

module.exports = sort;

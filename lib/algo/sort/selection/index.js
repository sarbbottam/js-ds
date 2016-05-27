function sort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i += 1) {
    let iMin = i;
    for (let j = i + 1; j < length; j += 1) {
      if (array[j] < array[iMin]) {
        iMin = j;
      }
    }
    [array[iMin], array[i]] = [array[i], array[iMin]];
  }

  return array;
}

module.exports = sort;

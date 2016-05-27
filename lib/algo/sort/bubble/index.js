function sort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i += 1) {
    let swaped = false;
    for (let j = 0; j < length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swaped = true;
      }
    }
    if (!swaped) {
      break;
    }
  }

  return array;
}

module.exports = sort;

function sort(array) {
  const length = array.length;
  for (let i = 1; i < length; i += 1) {
    const value = array[i];
    let index = i;
    while (index > 0 && array[index - 1] > value) {
      array[index] = array[index - 1];
      index -= 1;
    }
    array[index] = value;
  }
  return array;
}

module.exports = sort;

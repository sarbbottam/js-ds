function merge(left, right, array) {
  const leftLength = left.length;
  const rightLength = right.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftLength && j < rightLength) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i += 1;
    } else {
      array[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  while (i < leftLength) {
    array[k] = left[i];
    i += 1;
    k += 1;
  }

  while (j < rightLength) {
    array[k] = right[j];
    j += 1;
    k += 1;
  }
}

function sort(array) {
  const length = array.length;
  if (length < 2) {
    return array;
  }
  const mid = Math.floor(length / 2);
  const left = [];
  const right = [];
  let i;

  for (i = 0; i < mid; i += 1) {
    left[i] = array[i];
  }
  for (i = mid; i < length; i += 1) {
    right[i - mid] = array[i];
  }
  sort(left);
  sort(right);
  merge(left, right, array);
  return array;
}

module.exports = sort;

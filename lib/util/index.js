/*
* Generates a random array
* with the given length and maximum number
*/
export function generateRandomArray(length = 100000, max = Number.MAX_SAFE_INTEGER) {
  return [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
}

/*
* Checks if an array is sorted
* by checking that each element is greater or equal than its predecessor
*/
export function isSorted(array = []) {
  return array.every((element, index, array) => {
    return array[index - 1] ? element >= array[index - 1] : true;
  });
}

/*
* Import them with:
* import { generateRandomArray, isSorted } from 'lib/util/index';
*/

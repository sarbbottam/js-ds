/*
*	Generates a random array
*	with the given length and maximum number
*/
generateRandomArray = (length = 100000, max = Number.MAX_SAFE_INTEGER) => [...new Array(length)]
  .map((_, i) => Math.round(Math.random() * max))


/*
* Checks if an array is sorted
*	by checking that each element is greater or equal than its predecessor
*/
isSorted = (array = []) => {
  return array.every((element, index, array) => {
    return array[index - 1] ? element >= array[index - 1] : true
  })
}
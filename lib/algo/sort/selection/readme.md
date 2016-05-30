>Selection sort algorithm starts by finding the minimum value in the array and moving it to the first position.
This step is then repeated for the second lowest value, then the third, and so on until the array is sorted.

![graphical representation of insertion sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

Already sorted in desired order
---

Let's consider `1, 2, 3, 4, 5` needs to be sorted in ascending order.

- 1st pass
  - `1` will be considered as minimum
  - `1` & `2` will be compared, and since `1` is less than `2`, nothing will happen.
  - `1` & `3` will be compared, and since `1` is less than `3`, nothing will happen.
  - `1` & `4` will be compared, and since `1` is less than `4`, nothing will happen.
  - `1` & `5` will be compared, and since `1` is less than `5`, nothing will happen.

- 2nd pass
  - `2` will be considered as minimum
  - `2` & `3` will be compared, and since `2` is less than `3`, nothing will happen.
  - `2` & `4` will be compared, and since `2` is less than `4`, nothing will happen.
  - `2` & `5` will be compared, and since `2` is less than `5`, nothing will happen.

- 3rd pass
  - `3` will be considered as minimum
  - `3` & `4` will be compared, and since `3` is less than `4`, nothing will happen.
  - `3` & `5` will be compared, and since `3` is less than `5`, nothing will happen.

- 4th pass
  - `4` will be considered as minimum
  - `4` & `5` will be compared, and since `4` is less than `5`, nothing will happen.

Already sorted in reverse order
---

Let's consider `5, 4, 3, 2, 1` needs to be sorted in descending order.

- 1st pass
  - `5` will be considered as minimum
  - `5` & `4` will be compared, and since `4` is more than `5`, `4` is the new minimum
  - `4` & `3` will be compared, and since `4` is more than `3`, `3` is the new minimum
  - `3` & `2` will be compared, and since `3` is more than `2`, `2` is the new minimum
  - `2` & `1` will be compared, and since `2` is more than `1`, `1` is the new minimum
  - `5` and `1` will be swapped
  - the list is now `1, 4, 3, 2, 5`

- 2nd pass
  - `4` will be considered as minimum
  - `4` & `3` will be compared, and since `4` is more than `3`, `3` is the new minimum
  - `3` & `2` will be compared, and since `3` is more than `2`, `2` is the new minimum
  - `2` & `5` will be compared, and since `2` is less than `5`, nothing will happen
  - `4` and `2` will be swapped
  - the list is now `1, 2, 3, 4, 5`

- 3rd pass
  - `3` will be considered as minimum
  - `3` & `4` will be compared, and since `3` is less than `5`, nothing will happen
  - `3` & `5` will be compared, and since `3` is less than `5`, nothing will happen

- 4th pass
  - `4` will be considered as minimum
  - `4` & `5` will be compared, and since `4` is less than `5`, nothing will happen

Time complexity
---

O(n<sup>2</sup>) for every case.

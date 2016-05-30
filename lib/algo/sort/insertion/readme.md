>Insertion sort is a sorting algorithm that inserts each item in the proper place into an initially empty list
by comparing it with each item in the list until it finds the new element's successor or the end of the list.

Insertion sort is a in-place sort, using constant extra memory.

Most humans, when sorting a deck of cards, will use a strategy similar to insertion sort.

For each element in the list, the algorithm places it, in the correct location in the list, at that instant of time.

![graphical representation of insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

Already sorted in desired order
---

Let's consider `1, 2, 3, 4, 5` needs to be sorted in ascending order.

- 1st pass
  - `2` & `1` will be compared, and since `2` is more than `1`, nothing will happen.

- 2nd pass
  - `3` & `2` will be compared, and since `2` is more than `3`, nothing will happen.
  - `3` & `1` will be compared, and since `1` is more than `3`, nothing will happen.

- 3rd pass
  - `4` & `3` will be compared, and since `4` is more than `3`, nothing will happen.
  - `4` & `2` will be compared, and since `4` is more than `2`, nothing will happen.
  - `4` & `1` will be compared, and since `4` is more than `1`, nothing will happen.

- 4th pass
  - `5` & `4` will be compared, and since `5` is more than `4`, nothing will happen.
  - `5` & `3` will be compared, and since `5` is more than `3`, nothing will happen.
  - `5` & `2` will be compared, and since `5` is more than `2`, nothing will happen.
  - `5` & `1` will be compared, and since `5` is more than `1`, nothing will happen.


Already sorted in reverse order
---

Let's consider `5, 4, 3, 2, 1` needs to be sorted in descending order.

- 1st pass
  - `4` & `5` will be compared, and since `4` is less than `5`, `5` will be shifted
  - `4` will be inserted before `5`. Now the list is `4, 5, 3, 2, 1`.

- 2nd pass
  - `3` & `5` will be compared, and since `3` is less than `5`, `5` will be shifted
  - `3` & `4` will be compared, and since `3` is less than `4`, `4` will be shifted
  - `3` will be inserted before `4`. Now the list is `3, 4, 5, 2, 1`.

- 3rd pass
  - `2` & `5` will be compared, and since `2` is less than `5`, `5` will be shifted
  - `2` & `4` will be compared, and since `2` is less than `4`, `4` will be shifted
  - `2` & `3` will be compared, and since `2` is less than `3`, `3` will be shifted
  - `2` will be inserted before `3`. Now the list is `2, 3, 4, 5, 1`.

- 4th pass
  - `1` & `5` will be compared, and since `1` is less than `5`, `5` will be shifted
  - `1` & `4` will be compared, and since `1` is less than `4`, `4` will be shifted
  - `1` & `3` will be compared, and since `1` is less than `3`, `3` will be shifted
  - `1` & `2` will be compared, and since `1` is less than `2`, `2` will be shifted
  - `1` will be inserted before `2`. Now the list is `1, 2, 3, 4, 5`.

Time complexity
---

O(n<sup>2</sup>) for every case.

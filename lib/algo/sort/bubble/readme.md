>Bubble sort is a sorting algorithm that works by repeatedly stepping through lists that need to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. This passing procedure is repeated until no swaps are required, indicating that the list is sorted. Bubble sort gets its name because smaller elements bubble toward the top of the list.

>Bubble sort is also referred to as sinking sort or comparison sort.

In Bubble sort algorithm, each item is compared to its adjacent items.
If the item are not in desired order, they are swaped.

For example, if the adjacent items are `5` & `3`, they will be swaped, if the `ascending` order is desired.
If there are no elements to swaped, it implies, the list is already sorted and the list is returned.

---

Best case (when the list is already sorted in desired order)
---

Let's consider `1, 2, 3, 4, 5` needs to be sorted in ascending order.

- `1` & `2` will be compared, and since `1` is less than `2`, items will not be swapped.
- `2` & `3` will be compared, and since `2` is less than `3`, items will not be swapped.
- `3` & `4` will be compared, and since `3` is less than `4`, items will not be swapped.
- `4` & `5` will be compared, and since `4` is less than `5`, items will not be swapped.

Since, there has been no swap, in the last pass, algorithm will end and return the list.

Worst case (when the list is already sorted in reverse order)
---

Let's consider `1, 2, 3, 4, 5` needs to be sorted in descending order.

- `1` & `2` will be compared, and since `1` is less than `2`, items will be swapped. Now the list is `2, 1, 3, 4, 5`.
- `1` & `3` will be compared, and since `1` is less than `3`, items will be swapped. Now the list is `2, 3, 1, 4, 5`.
- `1` & `4` will be compared, and since `1` is less than `4`, items will be swapped. Now the list is `2, 3, 4, 1, 5`.
- `1` & `5` will be compared, and since `1` is less than `5`, items will be swapped. Now the list is `2, 3, 4, 5, 1`.

Since there has/have been swap, now

- `2` & `3` will be compared, and since `2` is less than `3`, items will be swapped. Now the list is `3, 2, 4, 5, 1`.
- `2` & `4` will be compared, and since `2` is less than `4`, items will be swapped. Now the list is `3, 4, 2, 5, 1`.
- `2` & `5` will be compared, and since `2` is less than `5`, items will be swapped. Now the list is `3, 4, 5, 2, 1`
- `2` & `1` will be compared, and since `2` is more than `1`, items will not be swapped.

Following the same principle, since there has/have been swap, now

- `3` & `4` will be compared, and since `3` is less than `4`, items will be swapped. Now the list is `4, 3, 5, 2, 1`.
- `3` & `5` will be compared, and since `3` is less than `5`, items will be swapped. Now the list is `4, 5, 3, 2, 1`.
- `3` & `2` will be compared, and since `3` is more than `2`, items will not be swapped.
- `2` & `1` will be compared, and since `2` is more than `1`, items will not be swapped.

Following the same principle, since there has/have been swap, now

- `4` & `5` will be compared, and since `4` is less than `5`, items will be swapped. Now the list is `5, 4, 3, 2, 1`.
- `4` & `3` will be compared, and since `4` is more than `3`, items will not be swapped.
- `3` & `2` will be compared, and since `3` is more than `2`, items will not be swapped.
- `2` & `1` will be compared, and since `4` is more than `1`, items will not be swapped.

Following the same principle, since there has/have been swap, now

- `5` & `4` will be compared, and since `5` is more than `4`, items will not be swapped.
- `4` & `3` will be compared, and since `4` is more than `3`, items will not be swapped.
- `3` & `2` will be compared, and since `3` is more than `2`, items will not be swapped.
- `2` & `1` will be compared, and since `4` is more than `1`, items will not be swapped.

Since, there has been no swap, in the last pass, algorithm will end and return the list.

Time complexity
---

- Best case scenario: O(n)
- Worst case scenario: O(n<sup>2</sup>)

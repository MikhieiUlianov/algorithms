function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function pivot(arr, start = 0, end = arr.length - 1) {
  var pivotValue = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
const unsortedArray = [100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23];
console.log("Before:", unsortedArray);
quickSort(unsortedArray);
console.log("After: ", unsortedArray);

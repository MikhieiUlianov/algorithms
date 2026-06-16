function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftSide = [];
  const rightSide = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftSide.push(array[i]);
    } else {
      rightSide.push(array[i]);
    }
  }
  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

const messyArray = [5, 2, 9, 1, 7, 6];
const sortedArray = quickSort(messyArray);
console.log("Original:", messyArray);
console.log("Sorted:  ", sortedArray);

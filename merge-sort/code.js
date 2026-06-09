function merge(arr1, arr2) {
  const resArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < arr1.length && rightIdx < arr2.length) {
    if (arr1[leftIdx] < arr2[rightIdx]) {
      resArr.push(arr1[leftIdx]);
      leftIdx++;
    } else {
      resArr.push(arr2[rightIdx]);
      rightIdx++;
    }
  }

  return resArr.concat(arr1.slice(leftIdx)).concat(arr2.slice(rightIdx));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 2, 1, 3]));

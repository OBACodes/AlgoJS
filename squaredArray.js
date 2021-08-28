// array = [1, 2];
// array.push(array[0]);
// console.log(array);

function sortedSquaredArray(array) {
  squared = [];
  rightPointerIdx = array.length - 1;
  leftPointerIdx = 0;

  for (let index = array.length - 1; index >= 0; index--) {
    if (Math.abs(array[leftPointerIdx]) > Math.abs(array[rightPointerIdx])) {
      squared.unshift(array[leftPointerIdx] ** 2);
      leftPointerIdx++;
    } else {
      squared.unshift(array[rightPointerIdx] ** 2);
      rightPointerIdx--;
    }
  }
  return squared;
}

sortedSquaredArray([-5, -4, -3, -2, -1]);

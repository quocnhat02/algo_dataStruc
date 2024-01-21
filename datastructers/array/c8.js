// Challenge 8: Right Rotate an Array by n

function rotateRight(arr, n) {
  return arr.slice(arr.length - n).concat(arr.slice(0, arr.length - n));
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 3));

// 5 4 3 2 1
// 3 4 5 2 1
// 3 4 5 1 2
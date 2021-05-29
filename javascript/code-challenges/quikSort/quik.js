
let swap = (arr, l, r) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};

let partition = (arr, l, r) => {
  let pivot = arr[Math.floor((r + l) / 2)];
  let i = l;
  let j = r;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
};

let quik = (arr, l, r) => {
  let i;
  if (arr.length > 1) {
    i = partition(arr, l, r);
    if (l < i - 1) {
      quik(arr, l, i - 1);
    }
    if (i < r) {
      quik(arr, i, r);
    }
  }
  return arr;
};


module.exports = {quik, partition, swap};

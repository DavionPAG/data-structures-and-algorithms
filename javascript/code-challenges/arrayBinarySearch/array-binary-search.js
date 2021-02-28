'use strcit';

let numArr = [2,4,6,8,10,11,12,14,16,18,20];


function binarySearch (arr, input) {
  let start = 0;
  let end = arr[arr.length -1];
  

while (start <= end) {

let mid = arr[(arr.indexOf(start) + arr.indexOf(end)) / 2];

  if (mid === input) {
    return arr.indexOf(mid)
  }

  else if (mid > input) {
    end = arr.indexOf(mid - 1)
  }

  else if (mid < input) {
    start = arr.indexOf(mid + 1)
  }

  else return -1;
}

}

binarySearch(numArr, 11);

'use strcit';

function binarySearch(arr, input) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);
        
        if (arr[mid] === input) {
            return (mid);
        }

        else if (arr[mid] > input) {
            end = mid - 1;
        }

        else if (arr[mid] < input) {
            start = mid + 1;
        }
    };
    return -1;
};

module.exports = binarySearch;


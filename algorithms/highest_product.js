// 1. Given an array of integers, find the highest product you can get from three of the integers.


// iterate through the array and multiply each other while checking for the max
// increase the index after each loop
// do not multiply same number(at the index)
// variables = max and index
// array must have 3 or more integers
// can have negative numbers

function highestProduct(arr) {
    let max = arr[0];
    let index0 = 0;
    let index1 = 1;
    let index2 = 2;

    if (arr.length < 3) {
        throw new Error("array must have a minimum of 3 numbers");
    }

    while(index0 < arr.length-2) {
        while(index1 < arr.length-1) {
            while(index2 < arr.length) {
                if (arr[index0]*arr[index1]*arr[index2] > max){
                    max = arr[index0]*arr[index1]*arr[index2];
                }
                index2++;
            }
            index1++;
            index2 = index1+1;
        }
        index0++;
        index1 = index0+1;
        index2 = index1+1;

    }
    return max;
};

console.log(highestProduct([1,2,3,4,5]) == 60); //true
console.log(highestProduct([-6,-7,3,4,5]) == 210); //true

module.exports = highestProduct;
// how can we make this better?
// sort the array from lowest to greatest
// multiply 3 highest numbers, arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1]
// multiply 2 lowest * highest, arr[0] * arr[1] * arr[arr.length-1]


// // TODO: add test file
//

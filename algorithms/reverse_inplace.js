// 3. Write a function that takes an array of characters and reverses the letters in place.
// TODO: add test file
//

const reverseInPlace = (arr) => {
    const mid = Math.floor(arr.length/2);
    let rightInd = arr.length-1;
    let leftInd = 0;
    let counter = 0;
    while(counter < mid){
        let leftVal = arr[leftInd];
        let rightVal = arr[rightInd];
        arr[leftInd] = rightVal;
        arr[rightInd] = leftVal;
        counter++;
        rightInd -= counter;
        leftInd += counter;
    }
    return arr;
};

module.exports = reverseInPlace;
function switchArrElements(index1, index2, arr){
    let switchedArr = arr;
    switchedArr[index2] = arr[index1];
    switchedArr[index1] = arr[index2];
    return switchedArr;
};

function bubbleSort(arr) {
    // iterate through the array // when last index is 0
        // if the current is greater than next then # switch the 2 elements
    let sortedArr = arr;
    let index = 0;
    let last = arr.length - 1;
    while(last > index){
       if(arr[index] > arr[index+1]){
           sortedArr = switchArrElements(index, index+1, arr)
           console.log(sortedArr);
       } 
       last = last - 1; 
       index = index + 1; 
    }
    // do this until the last element you've placed previously
    // we keep track of the last index we've placed decrement this on each iteration
    return sortedArr;
}

// switching elements // helper method

module.exports = { 
    bubbleSort, 
    switchArrElements
};
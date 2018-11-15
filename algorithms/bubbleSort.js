function switchArrElements(index1, index2, arr){
    let temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
    console.log('arr',arr);
    return arr;
};

function bubbleSort(arr) {
    // iterate through the array // when last index is 0
        // if the current is greater than next then # switch the 2 elements
    let index = 0;
    let sortedArr = arr;
    let last = arr.length - 1;
       while( last > index){
           arr.forEach(
             function(){ 
              if(arr[index] > arr[index+1]){
                  sortedArr = switchArrElements(index, index+1, arr)
              } 
              index++;
             }
           )
           index = 0;
           last--;
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
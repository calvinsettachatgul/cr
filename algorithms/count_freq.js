const countFreq = (arr) => {
    
    let result = {};
    let index = 0;
    const loopHelper = () => {
        if(index == arr.length) {
            // base case
            return arr;
        } else { 
            // recursive case
            if(!result[arr[index]]) {
                result[arr[index]] = 1
            } else {
                result[arr[index]]++;
            }
            index++
            loopHelper(index)
        }
    }
    
    loopHelper(index);
    return result;
};

console.log(countFreq([1,2,3,1,2,3,4]))

// const loopRecurse = (arr, index = 0) => {
//     //base case
//     if (index < arr.length) {
//         return arr;
//     }
//     else {
//     //recursive case
//         console.log(arr[index]);
//         index++
//         loopRecurse(arr, index)
//     }
// };
// loopRecurse([1,2,3])
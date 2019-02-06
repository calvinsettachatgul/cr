const loopRecurse = (arr, index = 0) => {
    
    //base case
    if (index < arr.length) {
        return arr;
    }
    else {
    //recursive case
        console.log(arr[index]);
        
        index++
        loopRecurse(arr, index)
    }
};

loopRecurse([1,2,3])

module.exports = loopRecurse;
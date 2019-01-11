// 3. Write a function that takes an array of characters and reverses the letters in place.
// TODO: add test file
//

// input ['a','b','c','d']
// output ['d','c','b','a']

const reverseInplace = (arr) => {
    let index = 0
    let length = arr.length-1

    if(arr.length == 1) {
        return arr
    }

    while(index < length) {
        let temp = arr[index];
        arr[index] = arr[length]
        arr[length] = temp
        length--
        index++
    }
    return arr
}

module.exports = reverseInplace;

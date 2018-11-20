// define a function
// inside the function you call the fuction

// add the numbers up from 1 to n done recursively instead of iteratively

// stucture
// base case
    // reached the simplest case and return
// iterative case
    // you call the function again
    // also you somehow reduce the problem

// addToNum(5)
// addToNum(4)
// addToNum(3)
// addToNum(2)
// addToNum(1)

// let addToNum = (number) => {
//     if (number == 0){
//       return 0;
//     }
//     // base case
//     // number == 1
//     if(number == 1){
//         return 1;
//     }else{
//     // iterative case
//     // we know we want to call the function with number - 1
//         return number + addToNum(number-1)
//     }

//     return result;
// }

/*
result = 0 + addToNum(5) => 5
5 + addToNum(4) => 9
9 + addToNum(3) => 12
12 + addToNum(2) => 14
14 + addToNum(1) => 15
*/

// robin solution
let addToNum = (number) => {
    // number is negative
    if (number < 0) {
        // return 'not valid'
        throw new Error("number must be greater than 1");
    // number is zero
    } else if (number == 0 ) {
        return number
    // number greater than 0
    } else {
        return (number + addToNum(number - 1))
    }
}

// console.log(addToNum(5))
module.exports = addToNum;

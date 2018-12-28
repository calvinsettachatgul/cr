// 1. Given an array of integers, find the highest product you can get from three of the integers.
//
// // TODO: add test file
//
//

const findMaxExcluding = (arr, indeces) => {
  let max = 1; 
  let index = null;
  for( let i = 0 ; i< arr.length; i++){
    if(arr[i] > max && !indeces[i]){
      max = arr[i] 
      index = i;
    //   { max: 2, index:1}
    //   { max: 3, index:2}
    //   { max: 4, index:3}
    };
  };
  return {
    index,
    max,
  }
};

// arr       indeces
// 0 [5,2,3,4] {}
// 1 find 5 {index:0,max:5} {0: {index:0, max:5}}
// 2 find 4 {index:3,max:5} {3: {index:3, max:4},0: {index:0, max:5} }

// indeces = {
//   0: {index:0, max 5},
//   3: {index:3, max 4},
//   2: {index:2, max 2},
// }

const highestProduct = (arr) => {
  let indeces = {};
  for (let i = 0 ; i< 3; i++){
    let maxData = findMaxExcluding(arr, indeces); // find the maximum number excluding an index
    indeces[maxData.index] = maxData;
  }
  let maxProduct = 1;
  Object.keys(indeces).forEach((index) => {
    maxProduct *= indeces[index].max;
  });
  return maxProduct
};

module.exports = highestProduct;


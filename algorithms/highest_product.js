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
    };
  };
  return {
    index,
    max,
  }
};

const highestProduct = (arr) => {
  let maxFactors = [1,1,1];
  let indeces = {};
  let collected = {}
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


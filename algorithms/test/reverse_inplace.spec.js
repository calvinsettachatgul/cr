let reverseInplace = require('../reverse_inplace');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

// console.log(reverseInplace(['a','b','c','d']))

describe('#reverseInplace', function () {
  it('should return reversed order of characters in an array', function () {
    let arr = ['a','b','c','d']
    let reversed_arr = ['d','c','b','a']
    expect(reverseInplace(arr)).to.eql(reversed_arr)
  });
  context('array length is 1', function() {
      it('should return original array', function () {
        let arr = ['a']
        let reversed_arr = ['a']
        expect(reverseInplace(arr)).to.eql(reversed_arr);
      });
  });
  // try JSON.stringify
});

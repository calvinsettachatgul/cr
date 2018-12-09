let highestProduct = require('../highest_product');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('#highestProduct', function () {
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,3])).to.equal(6);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,3,4])).to.equal(24);
  });
});

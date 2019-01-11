let highestProduct = require('../highest_product');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe.only('#highestProduct', function () {
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,3])).to.equal(6);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,3,4])).to.equal(24);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,4,4,4])).to.equal(4 * 4 * 4);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,2,4,9,100])).to.equal(4 * 9 * 100);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1000,2,4,9,100])).to.equal(1000 * 9 * 100);
  });
  it('should return highest product of 3 numbers in array', function () {
    expect(highestProduct([1,1000,4,9,100])).to.equal(1000 * 9 * 100);
  });
});

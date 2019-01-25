let reverseInPlace = require('../reverse_inplace');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe.only('#reverseInPlace', function () {
  it('should return reversed array', function () {
    expect(JSON.stringify(reverseInPlace([1,2,3]))).to.equal(JSON.stringify([3,2,1]));
  });
  it('should return reversed array', function () {
    expect(JSON.stringify(reverseInPlace([1,2,3,4,5]))).to.equal(JSON.stringify([5,4,3,2,1]));
  });
  it('should return reversed array', function () {
    expect(JSON.stringify([5,4,3,2,1])).to.equal(JSON.stringify([5,4,3,2,1]));
  });
});

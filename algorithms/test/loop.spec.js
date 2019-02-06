let loopRecurse = require('../loop');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe.only('#loopRecurse', function () {
  it('should return the arr', function () {
    expect(loopRecurse([1,2,3])).to.eql([1, 2, 3]);
  });
});

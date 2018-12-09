let template = require('../template');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('#module', function () {
  it('should return true', function () {
    expect(template.moduleA()).to.equal(true);
  });
});

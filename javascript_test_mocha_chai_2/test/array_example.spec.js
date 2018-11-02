var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
  
  describe('#[] get method of an array', function() {
    it('should return the element at index [index]', function(){
      // let testARR = [1,2,3]
      assert.equal(2, [1,2,3][1]);
    });
  });
});

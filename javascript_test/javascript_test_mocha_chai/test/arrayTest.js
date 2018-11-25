let chai = require('chai');
/*global chai*/
let assert = chai.assert;

describe('Array', function() {
  let arr;
  beforeEach(function() {
    arr = [1,2];
  });
  describe('new', function(){
    it('should have a length of 2', function(){
    // let arr = [1,2]; 
      assert.equal(arr.length, 2);
    });
  })
  describe('#push', function() {
      it('should add an element to an array', function() {
          // let arr = [1,2];
          let new_element = 3
          arr.push(new_element);
          assert.equal(arr.length, 3)
          assert.equal(arr[2], new_element)
      })
  })
  
    describe('#pop', function() {
      it('should remove an element from the end of an array', function() {
          // let arr = [1,2];
          arr.pop();
          assert.equal(arr.length, 1)
          assert.equal(arr[0], 1)
      })
      
  })
  describe('#shift', function() {
      it('should remove an element from the beginning of an array', function() {
          // let arr = [1,2];
          arr.shift();
          assert.equal(arr.length, 1);
          assert.equal(arr[0], 2);
      })
  })
  
  describe('#unshift', function(){
    it('should add an element to the beginning of an array', function(){
      // let arr = [1,2];
      arr.unshift(3);
      assert.equal(arr[0], 3);
      assert.equal(arr.length, 3);
    })
  })

});

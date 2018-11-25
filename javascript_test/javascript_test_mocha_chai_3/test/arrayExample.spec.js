var assert = require('assert');

describe('#indexOf()', function() {
   it('should return -1 when the value is not present', function(){
     console.log("ran the test")
     assert.equal(-1, [1,2,3].indexOf(4));
   });
});

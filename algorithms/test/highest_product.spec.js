let chai = require('chai');
let assert = require('assert');
let expect = chai.expect;

let { highestProduct } = require('../highest_product');

describe('#highestProduct', function() {
    it('should return the highest product of 3 numbers in an array', function() {
        let array = [3,2,1,4,5];
        assert.isFunction(highestProduct(array))
    })
})


// not working

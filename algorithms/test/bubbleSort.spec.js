let bubbleSort = require('../bubbleSort');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('#bubbleSort', function(){
    it('should sort an array from least to greatest', function(){
        let unsorted = [5,3,2,1];
        assert.equal(JSON.stringify(bubbleSort(unsorted)), JSON.stringify([1,2,3,5]));
    })
})
let { bubbleSort } = require('../bubbleSort');
let { switchArrElements } = require('../bubbleSort');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('#bubbleSort', function(){
    it('should sort an array from least to greatest', function(){
        let unsorted = [2,1];
        assert.equal(JSON.stringify(bubbleSort(unsorted)), JSON.stringify([1,2]));
    })
    it('should sort an array from least to greatest', function(){
        let unsorted = [3,2,1];
        assert.equal(JSON.stringify(bubbleSort(unsorted)), JSON.stringify([1,2,3]));
    })
    it('should sort an array from least to greatest', function(){
        let unsorted = [5,3,2,1];
        assert.equal(JSON.stringify(bubbleSort(unsorted)), JSON.stringify([1,2,3,5]));
    })
})

describe('#switchArrElements', function(){
    it('should switch 2 array elements', function(){
        let unswitched = [2,1];
        assert.equal(JSON.stringify(switchArrElements(0,1,unswitched)), JSON.stringify([1,2]));
    })
})
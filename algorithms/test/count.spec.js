let addToNum = require('../count');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;


describe('#addToNum', function(){
    // context('the first argument is a string', function(){
    //     it('should return return null', function(){
            
    //     })
    //     it('should not throw an error', function(){
            
    //     })
        
    // })
    
    context('an error occurred negative input', function(){
        it('should throw an error', function(){
             expect(() => addToNum(-2)).to.throw('number must be greater than 1'); // PASS
        })
    })
    
    context('first argument is an Integer, second number is initial value', function(){
        it('should return the sum of the integers from 0 to first argument', function(){
           assert.equal(addToNum(5), 15) 
        })
        it('should return the sum of the integers from 0 to first argument', function(){
           assert.equal(addToNum(1), 1) 
        })
        it('should return the sum of the integers from 0 to first argument argument is 0', function(){
           assert.equal(addToNum(0), 0) 
        })
    })
})

let Dog = require('../dog');
let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;

describe('DogContructorFunction', function(name) {
    it('should it have a name', function() {
        let newDog = new Dog('Champ');
        assert.equal('Champ', newDog.name);
    })
    
    it('should not have color property', function() {
        let newDog = new Dog('Champ');
        expect(newDog).to.not.have.property('color')
    })
    
    it('should have all these keys', function(){
        let newDog = new Dog('Champ');
        expect(newDog).to.have.all.keys('name');
    })
    
    it('should not throw an error on creation', function(){
        let dogConstructor = Dog;     
        expect(dogConstructor).to.not.throw();
    })
    
})
console.log(Dog);
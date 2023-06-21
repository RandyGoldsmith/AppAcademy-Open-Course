// I require chai so I can use it inside the file
const chai = require('chai');
// extracting the asssertion style we want to use which is "expect"
const expect = chai.expect;
// import reverseString function 
const reverseString = require('../problems/reverse-string');


describe('reverseString(string)', () => {
    it('should return the reversed string', () => {
        expect(reverseString('fun')).to.equal('nuf');
    })

    it('should throw TypeError if not passed in a string', () => {
        expect(() => reverseString(55).to.throw(TypeError));
        expect(() => reverseString([1,2,3]).to.throw(TypeError));
        expect(() => reverseString({name: 'rory', age: 5}).to.throw(TypeError));
    })
})

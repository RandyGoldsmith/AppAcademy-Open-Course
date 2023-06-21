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
})

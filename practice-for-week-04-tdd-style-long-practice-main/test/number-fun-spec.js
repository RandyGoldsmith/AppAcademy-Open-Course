// Your code here
const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', () => {
    it('should return three', () => {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal(num)', () => {
    it('should return the reciprocal of the input number', () => {
        expect(reciprocal(5/2)).to.equal(2/5);
        expect(reciprocal(25)).to.equal(1/25);
        expect(reciprocal(5)).to.equal(1/5);
    })

    it('should throw an error if input is not within range', () => {
        expect(() => reciprocal(-5)).to.throw(RangeError);
        expect(() => reciprocal(5555555)).to.throw(RangeError);
    })

    it('should throw an error if input is not a number', () => {
        expect(() => reciprocal('mom')).to.throw(TypeError);
        expect(() => reciprocal([1,2,3])).to.throw(TypeError);
    })
})
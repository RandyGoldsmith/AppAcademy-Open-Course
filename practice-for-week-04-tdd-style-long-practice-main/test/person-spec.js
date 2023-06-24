// Your code here
const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe('Person class', () => {
    let pete;
    let joe;
    beforeEach(() => {
        pete = new Person('Pete');
        joe = new Person('Joe', 19);
    })
        
    it('should have a name property', () => {
        expect(pete).to.have.property('name');
    })

    it('shoud have an age property', () => {
        expect(joe).to.have.property('age');
    })

    describe('sayHello()', () => {
        it('should return a string of a Persons instance name and greet message', () => {
            expect(joe.sayHello()).to.equal('Hello Joe');
        })
    })

    // testing the visit method which takes in a person object (instance) and returns a string of the name of the person who called the function, is visited by the name of the person whom was passed in as an arguement
    describe('visit(otherPerson)', () => {
        it('should return a string of the instances passed in person that is visited', () => {
            expect(joe.visit(pete)).to.equal('Joe visited Pete');
        })
    })
})
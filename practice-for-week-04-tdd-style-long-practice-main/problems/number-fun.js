function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(num) {
  //checking to see if input is a number
  if(typeof num !== 'number') {
    throw new TypeError('input must be of type number');
  }

  if(num < 1 || num > 1000000) {
    throw new RangeError('input must be greater than 1 and less than 1,000,000');
  }

  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal
};
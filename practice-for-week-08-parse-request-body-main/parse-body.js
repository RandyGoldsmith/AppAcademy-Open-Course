function firstStep(input) {
  // Your code here
  return input.split("&");
}

function secondStep(input) {
  // Your code here
  return input.map((v) => {
    return v.split("=");
  });
}

function thirdStep(input) {
  // Your code here
  return input.map((element) => {
    return element.map((word) => {
      return word.replace(/\+/g, " ");
    });
  });
}

function fourthStep(input) {
  // Your code here
  return input.map((element) => {
    return element.map((word) => {
      return decodeURIComponent(word);
    });
  });
}

function fifthStep(input) {
  // Your code here
}

function parseBody(str) {
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};

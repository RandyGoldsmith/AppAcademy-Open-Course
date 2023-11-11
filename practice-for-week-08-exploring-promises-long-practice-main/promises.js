/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */
function num1() {
  return 1;
}

async function num2() {
  return "Randy";
}

//console.log("num", num1());
//console.log("num", num2());
//num2().then((data) => console.log(data));
// Your code here

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */
async function waiting() {
  const value = await num2();
  console.log("waiting", value);
}
//waiting();
// Your code here

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */
async function waitForMyPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!!!");
    }, 1000);
  });

  const result = await promise;
  console.log("my promise is", result);
}

//waitForMyPromise();
// Your code here

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
/*new Promise((resolve) => {
  setTimeout(() => {
    resolve("done!");
  }, 500);
}).then((r) => console.log("then my other promise is", r));
*/
// Your code here

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function anotherFunc() {
  wait(2000).then(() => console.log(`after waiting 2 seconds`));
}

//anotherFunc(2000);
// Your code here

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */
function tryRandomPromise(random) {
  return new Promise((resolve, reject) => {
    if (random > 0.5) {
      resolve("success");
    } else {
      reject("random error");
    }
  });
}

for (let i = 0; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => tryRandomPromise(random))
    .then((result) => console.log("random try #", i, result))
    .catch((error) => console.error("random try #", i, error));
}
// Your code here

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */
const tryRandomPromiseAgain = async (i) => {
  const random = Math.random();
  await wait(2000 + random * 1000);

  try {
    const result = await tryRandomPromise(random);
    console.log("random try #", i, result);
  } catch (error) {
    console.error("random try #", i, error);
  }
};

for (let i = 0; i < 10; i++) {
  tryRandomPromiseAgain(i);
}

// Your code here

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log("end of program");

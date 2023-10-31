const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require("http");
let server;

server = http.createServer((req, res) => {
  let reqBody = "";
  res.setHeader("Content-Type", "application/x-www-form-urlencoded");

  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    req.body = parseBody(reqBody);
    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () => {
  console.log("Successfully started the server on port", 5000);
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };

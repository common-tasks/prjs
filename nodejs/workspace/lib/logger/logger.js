const fs = require("fs");
const { Console } = require("console");

const output = fs.createWriteStream("./data/stdout.log");
const errorOutput = fs.createWriteStream("./data/stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });

function logMessage(message) {
  logger.log("msg:", message);
}

module.exports = { logMessage };

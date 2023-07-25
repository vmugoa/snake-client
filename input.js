const { commandKeys } = require("./constants");

// setup interface to handle user input from stdin
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;

  // sets the input mode to raw mode
  // keypress are immediately provided as input without waiting for the use to press Enter key
  stdin.setRawMode(true);

  stdin.setEncoding("utf8");
  stdin.resume();

  //event listner, "data" event invokes handleUserInput function
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //ctrl + c to exit
  if (key === "\u0003") {
    process.exit();
  }

  if (commandKeys[key]) {
    connection.write(commandKeys[key]);
  }
};

module.exports = { setupInput };
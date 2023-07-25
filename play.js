//handles different aspects of the network connection to the server where the game runs
const { connect } = require("./client");

//sets up the input handling for user interaction via stdin
const { setupInput } = require("./input.js");

console.log("Connecting ...");
const conn = connect();
setupInput(conn);
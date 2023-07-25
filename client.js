const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: VDM");
    //conn.write("Move: up");
    //conn.write("Move: down");
    // setInterval(() => {
    //  conn.write("Move: right") }, 50);
  });

  /* Supported commands:
      "Move: up" - move up one square (unless facing down)
      "Move: down" - move down one square (unless facing up)
      "Move: left" - move left one square (unless facing right)
      "Move: right" - move left one square (unless facing left)

  */

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;
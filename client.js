const { IP, PORT, userName } = require("./constants");

const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print message when the connection is established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(userName);
  });

  return conn;
};

module.exports = { connect };
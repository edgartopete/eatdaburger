var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "aevwnbu43kdi7wft",
  password: "zrm059bstur48onz",
  database: "z2uotne77ks75u1v"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
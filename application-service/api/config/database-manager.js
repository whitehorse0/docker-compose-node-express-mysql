var mysql = require("mysql")

function DatabaseManager() {
  this.connection = null;
}

DatabaseManager.prototype.createConnection = function () {
  this.connection = mysql.createConnection({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'user',
    password: 'password',
    database: 'db_test',
    port: 3306
  })

  this.connection.connect(function (err) {
    if (err) {
      console.error("error connecting " + err.stack);
      return null;
    }
    console.log("connected as id " + this.threadId);
  })
  return this.connection;
}

module.exports = DatabaseManager;

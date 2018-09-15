const mysql = require('mysql')
class DatabaseManager {
  constructor() {
    this.connection = null
  }

  createConnection () {
    this.connection = mysql.createConnection({
      host: process.env.DATABASE_HOST || '127.0.0.1',
      user: 'user',
      password: 'password', 
      database: 'db_test'
    })
  
    this.connection.connect(function (err) {
      if (err) {
        console.error("error connecting " + err.stack)
        return null;
      }
      console.log('You are now connected to database...')
    })

    return this.connection
  }
}

module.exports = new DatabaseManager()
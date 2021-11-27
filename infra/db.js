const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "inet",
    password: "Lock1net",
    database: "agendapet"
})

module.exports = db
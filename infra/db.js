const Sequelize = require('sequelize')
const mysql = require("mysql")
const config = require("config")

const db = new Sequelize(
    config.get('mysql.schema'),
    config.get('mysql.user'),
    config.get('mysql.password'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
)

module.exports = db 
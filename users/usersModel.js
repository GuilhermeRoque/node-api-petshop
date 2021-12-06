const Sequelize = require("sequelize")
const db = require("../infra/db")

const columns={
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    hashPassword:{
        type: Sequelize.STRING,
        allowNull: false
    },
}

// table name in db
const options = {
    freezeTableName: true,
    tableName: 'users',
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updateDate',
    version: 'version'
}

// table name in code
module.exports = db.define('users',columns,options);
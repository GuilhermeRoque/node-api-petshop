const Sequelize = require("sequelize")
const db = require("../infra/db")

const collums={
    client:{
        type: Sequelize.STRING,
        allowNull: false
    },
    service:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    notes:{
        type: Sequelize.STRING,
        allowNull: false
    }

}

// table name in db
const options = {
    freezeTableName: true,
    tableName: 'schedules',
    timestamps: true,
    createdAt: 'creationDate',
    updatedAt: 'updateDate',
    version: 'version'
}

// table name in code
module.exports = db.define('schedules',collums,options);
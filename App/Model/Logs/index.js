const { DataTypes } = require('sequelize');
const db = require('../../config/db');


const logs = db.define('LOGS', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    LOGS: {
        type: DataTypes.STRING,
    }

}, { freezeTableName: true });

module.exports = logs
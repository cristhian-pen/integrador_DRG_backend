const { DataTypes } = require('sequelize');
const db = require('../config/db');

const analiseCritica = db.define('analiseCritica', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    dataAnalise: {
        type: DataTypes.DATE
    },
    analiseCritica: {
        type: DataTypes.STRING(1234)
    }
}, { timestamps: false, freezeTableName: true });

analiseCritica.sync();

module.exports = analiseCritica;
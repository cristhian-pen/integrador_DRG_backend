const { DataTypes } = require('sequelize');
const db = require('../config/db');

const hospital = db.define('hospital', {
    id_hosp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        allowNull: false,
        autoIncrement: true
    },
    cd_hosp: {
        type: DataTypes.INTEGER
    },
    nomeHospital: {
        type: DataTypes.STRING
    },
    cnes: {
        type: DataTypes.INTEGER
    },
    dataIntegracaoIni: {
        type: DataTypes.DATE
    },
    dataIntegracaoFin: {
        type: DataTypes.DATE
    },
    sn_integra: {
        type: DataTypes.CHAR(2)
    }
}, { timestamps: false, freezeTableName: true });

module.exports = hospital;
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const cti = db.define('cti', {
    id_cti: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dt_inicial: {
        type: DataTypes.DATE
    },
    dt_final: {
        type: DataTypes.DATE,
    },
    condicaoAlta: {
        type: DataTypes.CHAR(5)
    },
    tip: {
        type: DataTypes.STRING
    },
    permanenciaPrevistaNaAlta: {
        type: DataTypes.CHAR(10)
    },
    permanenciaReal: {
        type: DataTypes.CHAR(5)
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

module.exports = cti;
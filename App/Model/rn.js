const { DataTypes } = require('sequelize');
const db = require('../config/db');

const rn = db.define('rn', {
    id_rn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    pesoNascimento: {
        type: DataTypes.INTEGER(10)
    },
    idadeGestacional: {
        type: DataTypes.INTEGER(10)
    },
    sexo: {
        type: DataTypes.CHAR(2)
    },
    nascidoVivo: {
        type: DataTypes.CHAR(2)
    },
    tocotraumatismo: {
        type: DataTypes.CHAR(2)
    },
    apgar: {
        type: DataTypes.CHAR(2)
    },
    apgarQuintoMinuto: {
        type: DataTypes.INTEGER(10)
    },
    alta48Horas: {
        type: DataTypes.CHAR(2)
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

module.exports = rn;
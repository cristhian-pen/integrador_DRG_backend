const { DataTypes } = require('sequelize');
const db = require('../config/db');

const altaAdministrativa = db.define('altaAdministrativa', {
    id_alta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    numeroAtendimento: {
        type: DataTypes.INTEGER
    },
    numeroAutorizacao: {
        type: DataTypes.INTEGER
    },
    dataAutorizacao: {
        type: DataTypes.DATE
    },
    dataAtendimentoInicial: {
        type: DataTypes.DATE
    },
    dataAtendimentoFinal: {
        type: DataTypes.DATE
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

module.exports = altaAdministrativa;
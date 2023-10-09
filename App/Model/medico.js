const { DataTypes } = require('sequelize');
const db = require('../config/db');

const medico = db.define('medico', {
    id_medico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    uf: {
        type: DataTypes.CHAR(5)
    },
    crm: {
        type: DataTypes.INTEGER
    },
    especialidade: {
        type: DataTypes.STRING
    },
    medicoResponsavel: {
        type: DataTypes.CHAR(5)
    },
    tipAtuacao: {
        type: DataTypes.STRING
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

module.exports = medico;
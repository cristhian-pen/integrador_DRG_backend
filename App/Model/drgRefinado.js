const { DataTypes } = require('sequelize');
const db = require('../config/db');


const drgBrasilRefinado = db.define('drgBrasilRefinado', {
    id_drg_brasil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    odigo: {
        type: DataTypes.CHAR
    },
    descricao: {
        type: DataTypes.STRING(1234)
    },
    tipo: {
        type: DataTypes.CHAR(2)
    },
    peso: {
        type: DataTypes.CHAR
    },
    mdc: {
        type: DataTypes.STRING
    },
    descricaoMdc: {
        type: DataTypes.STRING(1234)
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

module.exports = drgBrasilRefinado;
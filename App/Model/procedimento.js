const { DataTypes } = require('sequelize');
const db = require('../config/db');


const procedimento = db.define('procedimento', {
    id_procedimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_procedimento: {
        type: DataTypes.STRING(100)
    },
    nm_procedimento: {
        type: DataTypes.STRING
    },
    porte: {
        type: DataTypes.STRING
    },
    dtExecucao: {
        type: DataTypes.DATE
    },
    dtExecucaoFinal: {
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

}, { timestamps: false, freezeTableName: true })

module.exports = procedimento;
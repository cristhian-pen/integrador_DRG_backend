const { DataTypes } = require('sequelize');
const db = require('../config/db');


const suporteVentilatorio = db.define('suporteVentilatorio', {
    id_supVent: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.CHAR(2)
    },
    local: {
        type: DataTypes.CHAR(2)
    },
    dataInicial: {
        type: DataTypes.DATE
    },
    dataFinal: {
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

module.exports = suporteVentilatorio;
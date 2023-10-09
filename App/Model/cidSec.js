const { DataTypes } = require('sequelize');
const db = require('../config/db');


const cidSecundario = db.define('cidSecundario', {
    id_cidSec: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cd_cid_sec: {
        type: DataTypes.CHAR,
    },
    desc_cid_sec: {
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

module.exports = cidSecundario; 
const { DataTypes } = require('sequelize');
const db = require('../config/db');


const condicaoAdquirida = db.define('condicaoAdquirida', {
    idCond_Adqu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.CHAR,
    },
    descricao: {
        type: DataTypes.STRING
    },
    dataOcorrencia: {
        type: DataTypes.DATE
    },
    dataManifestacao: {
        type: DataTypes.DATE
    },
    grave: {
        type: DataTypes.CHAR(2)
    }
}, { timestamps: false, freezeTableName: true });

module.exports = condicaoAdquirida;
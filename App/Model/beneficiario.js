const { DataTypes } = require('sequelize');
const db = require('../config/db');
const hospital = require('./hospital');


const beneficiario = db.define('beneficiario', {
    id_beneficiario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cd_paciente: {
        type: DataTypes.STRING,
    },
    plano: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dt_nascimento: {
        type: DataTypes.DATE
    },
    sexo: {
        type: DataTypes.STRING(5)
    },
    idadeAnos: {
        type: DataTypes.INTEGER(10)
    },
    /* novas colunas para atender mudança na API */
    particular: {
        type: DataTypes.STRING(5)
    },
    rn: {
        type: DataTypes.STRING(5)
    },
    idadeMeses: {
        type: DataTypes.INTEGER(10)
    },
    idadeDias: {
        type: DataTypes.INTEGER(50)
    }
}, { timestamps: false, freezeTableName: true });

module.exports = beneficiario;
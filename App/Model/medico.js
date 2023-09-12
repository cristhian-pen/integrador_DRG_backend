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
    }

}, { timestamps: false, freezeTableName: true });

medico.sync();

module.exports = medico;
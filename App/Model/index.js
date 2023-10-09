const { DataTypes } = require('sequelize');
const db = require('../config/db');

const integra = db.define('DRG_EXPORTA', {
    id_integracao: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    situacao: {
        type: DataTypes.STRING
    },
    caraterInternacao: {
        type: DataTypes.STRING
    },
    numeroOperadora: {
        type: DataTypes.STRING
    },
    numeroRegistro: {
        type: DataTypes.STRING
    },
    numeroAtendimento: {
        type: DataTypes.STRING
    },
    numeroAutorizacao: {
        type: DataTypes.STRING
    },
    dataInternacao: {
        type: DataTypes.STRING
    },
    dataAlta: {
        type: DataTypes.STRING
    },
    condicaoAlta: {
        type: DataTypes.STRING
    },
    dataAutorizacao: {
        type: DataTypes.STRING
    },
    internadoOutrasVezes: {
        type: DataTypes.CHAR
    },
    hospitalInternacaoAnterior: {
        type: DataTypes.CHAR
    },
    reinternacao: {
        type: DataTypes.CHAR
    },
    recaida: {
        type: DataTypes.CHAR(10)
    },
    dataPrevistaAlta: {
        type: DataTypes.STRING
    },
    permanenciaPrevistaNaInternacao: {
        type: DataTypes.CHAR
    },
    permanenciaPrevistaNaAlta: {
        type: DataTypes.CHAR
    },
    permanenciaReal: {
        type: DataTypes.CHAR
    },
    percentil: {
        type: DataTypes.CHAR
    },
    procedencia: {
        type: DataTypes.CHAR
    },
    ventilacaoMecania: {
        type: DataTypes.CHAR
    },
    dataCadastro: {
        type: DataTypes.STRING
    },
    usuarioCadastro: {
        type: DataTypes.STRING
    },
    usuarioCadastroAlta: {
        type: DataTypes.STRING
    },
    dataUltimaAlteracao: {
        type: DataTypes.STRING
    },
    usuadrioUltAlt: {
        type: DataTypes.STRING
    },
    correcaoRegistro: {
        type: DataTypes.STRING
    },
    usuarioCorrecao: {
        type: DataTypes.STRING
    },
    dataUltimoRecalculo: {
        type: DataTypes.STRING
    },
    leito: {
        type: DataTypes.STRING(1234)
    },
    condicaoAdquiridaGrave: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING(10)
    },
    cidade: {
        type: DataTypes.STRING(10)
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
}, { freezeTableName: true });

module.exports = integra
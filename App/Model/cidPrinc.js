const { DataTypes } = require('sequelize');
const db = require('../config/db');



const cidPrincipal = db.define('cidPrincipal', {
    id_cid_principal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cd_cid: {
        type: DataTypes.CHAR
    },
    descricao: {
        type: DataTypes.STRING(1234)
    },
    sensivelCuidadoPrimario: {
        type: DataTypes.CHAR(2)
    },
    cidSecundario: {
        type: DataTypes.CHAR
    },
    desc_cid_sec: {
        type: DataTypes.STRING(1234)
    }
}, { timestamps: false, freezeTableName: true });

module.exports = cidPrincipal;
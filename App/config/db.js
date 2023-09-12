require('dotenv').config();
const { Sequelize } = require('sequelize');
const DB = process.env.DB_NAME;
const USR = process.env.DB_USR;
const PASS = process.env.DB_PASS;
const HOST = process.env.DB_HOST;



const db = new Sequelize(DB, USR, PASS, {
    host: HOST,
    dialect: 'mysql',
    dialectModule: require('mysql2')
});


module.exports = db;
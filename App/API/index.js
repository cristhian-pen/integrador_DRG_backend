require('dotenv').config();
const { default: axios } = require('axios');

const URL = process.env.API_DRG;

const api = axios.create({
    baseURL: URL,
    timeout: 2000
});

module.exports = api
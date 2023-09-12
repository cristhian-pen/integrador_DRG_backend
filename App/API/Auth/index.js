require('dotenv').config();
const { default: axios } = require('axios');

const AUTH = process.env.API_AUTH;
const ENVIO = process.env.ENVIO

async function authentication() {

    const valid = axios.post(AUTH, ENVIO)
        .then(res => {

            return res.data;

        }).catch(e => {
            console.log('requisição falhou!' + e);
        })

    return await valid;
}

module.exports = { authentication }
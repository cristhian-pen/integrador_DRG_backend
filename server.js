require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./App/config/db');
const { Integra, searchLogs, registerLogs } = require('./App/Controller/index');
const cors = require('cors');
const PORT = process.env.PORT;
const NAME = process.env.DB_NAME;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => { res.sendStatus(200) });
app.get('/integra', Integra);
app.post('/logs/:message', registerLogs);
app.get('/logsExecucao', searchLogs);

db.authenticate();
try {
    console.log(`Connection established successfully on database ${NAME}`);
} catch {
    console.log('Connection rejected, check your informations!');
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

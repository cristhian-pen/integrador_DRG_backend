require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Relationship = require('./App/Model/TabsCreate/index');
const db = require('./App/config/db');
const { searchLogs, registerLogs, ManualIntegra, deletaIntegra, Integra } = require('./App/Controller/index');
const cors = require('cors');
const PORT = process.env.PORT;
const NAME = process.env.DB_NAME;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => { res.sendStatus(200) });
app.get('/integra', Integra);
app.post('/integra/manual', ManualIntegra);
app.post('/integra/delete', deletaIntegra);
app.get('/logsExecucao', searchLogs);
app.post('/logs/:message', registerLogs);

db.authenticate();
try {
    console.log(`Connection established successfully on database ${NAME}`);
    Relationship();
} catch {
    console.log('Connection rejected, check your information!');
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

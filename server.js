//TimeZone para São Paulo
process.env.TZ = 'America/Sao_Paulo';

//Importações Principais
const express = require('express');
require('express-async-errors');
require('dotenv-safe').config();
const router = require('./src/router');

const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const datahora = require('./src/plugins/datahora');

//Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: process.env.SERVERDOMINIO.split(','),
    credentials: true
}));
app.use(express.static(path.join(__dirname, "public")));
const porta = process.env.SERVERPORT || 80;

//Setando o roteador no servidor
app.use('/api', router);

//Middleware de erro do Express
app.use((err, req, res, next) => {
    console.log('Erro na API: ' + err);
    return res.json({
        status: "Erro"
    });
});

app.get("/", function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

server.listen(porta, () => {
    if(process.env.MODE === 'development'){
        console.clear();
    }
    console.log("Servidor iniciado na porta " + porta + " em " + datahora.getData() + " às " + datahora.getHora());
});
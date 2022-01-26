const express = require("express");
const Conn = require('./Model/conn/coon')
const app = express();
app.use(express.json())

const port = 8000;

Conn()

app.listen(port, () => {
    console.log('Servidor Rodando na Porta ', port)
})

const express = require('express');
const videoRoutes = require('./routes/videoRoutes');

const server = express();

server.use(express.json())

server.use(videoRoutes);

server.get('/', (_req, res) => {
    res.send('Olá, bem vindo ao server, casca de bala (;')
});


server.listen('3000', () => console.log('Tá rodando pai'));
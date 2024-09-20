const express = require('express');

const { videos } = require('../mock/dados.json');

const router = express.Router();


router.get('/videos', (_req, res) => {
    if (videos.length === 0) {
        res.status(404).json({ error: "Nenhum video encontrado." });
    }

    res.status(200).json(videos);
});

router.get('/videos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let video = videos.filter(i => i.id === id);

    if (videos.some(i => i.id === id)) {

        res.status(200).json(video)
    }
});

router.post('/videos', (req, res) => {
    const { titulo, descricao, quantidadeViews, image, canalID } = req.body;
    
    function gerarID() {
        let id = 0;
        do {
            id = Math.floor(Math.random() * 1000)
        } while (id === videos.some(video => video.id === id))

        return id
    }

    const novoVideo = {
        id: gerarID(),
        titulo: titulo,
        descricao: descricao,
        quantidadeViews: quantidadeViews,
        image: image,
        canalID: canalID
    }

    videos.push(novoVideo);

    res.status(201).json(novoVideo);
});

router.put('/videos/:id', (req, res) => {});

router.delete('/videos/:id', (req, res) => {});

module.exports = router;
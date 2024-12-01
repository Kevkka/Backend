const express = require('express');

const router = express.Router();
const GenreService = require('../services/GenreService');

router.get('/genre', async (req, res) => {
    try {
        const genre = await GenreService.getGenres();
        return res.send(genre);
    }catch {
        return res.status(500).send({ error });
    }
});

router.post('/genre', async (req, res) => {
    try {
        const genre = await GenreService.createGenre(req.body);
        return res.send(genre);
    }catch {
        return res.status(500).send({ error });
    }
});

router.get('/genre/:id', async (req, res) => {
    try {
        const { id } = req.params
        const genre = await GenreService.getGenreById(id);
        return res.send(genre);
    }catch {
        return res.status(500).send({ error });
    }
});

router.put('/genre/:id', async (req, res) => {
    try {
        const { id } = req.params
        const genre = await GenreService.updateGenre(id, req.body);
        return res.send(genre);
    }catch {
        return res.status(500).send({ error });
    }
});

router.delete('/genre/:id', async (req, res) => {
    try {
        const { id } = req.params
        const genre = await GenreService.deleteGenre(id);
        return res.send(genre);
    }catch {
        return res.status(500).send({ error });
    }

});


module.exports = router;
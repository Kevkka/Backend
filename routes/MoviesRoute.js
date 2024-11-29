const express = require('express');

const router = express.Router();
const MoviesService = require('../services/MoviesService');

router.get('/movies', async (req, res) => {

    try {
        const MoviesData = await MoviesService.getMovies();
        return res.send(MoviesData);
    }catch {
        return res.status(500).send({ error });
    }
            
});

router.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
        const MoviesData = await MoviesService.getMovieById(movieId);
        return res.send(MoviesData);
    }catch {
        return res.status(500).send({ error });
    }

});

router.post('/movies', async (req, res) => {
    const movieData = req.body;
    try {
        const MoviesData = await MoviesService.createMovie(movieData);
        return res.send(MoviesData);
    }catch {
        return res.status(500).send({ error });
    }

});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const MoviesData = await MoviesService.updateMovie(id, req.body);
        return res.send(MoviesData);
    }catch {
        return res.status(500).send({ error });
    }

});

router.delete('/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
        const MoviesData = await MoviesService.deleteMovie(movieId);
        return res.send(MoviesData);
    }catch {
        return res.status(500).send({ error });
    }

});

module.exports = router;
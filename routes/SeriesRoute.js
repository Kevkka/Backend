const express = require('express');
const SeriesService = require('../services/SeriesService');

const router = express.Router();

router.get('/series', async (req, res) => {
    try {
        const SeriesData = await SeriesService.getSeries();
        return res.send(SeriesData);
    }catch {
        return res.status(500).send({ error });
    }
});

router.get('/series/:id', async (req, res) => {
    try {
        const SeriesData = await SeriesService.getSeriesById(req.params.id);
        return res.send(SeriesData);
    }catch {
        return res.status(500).send({ error });
    }
});

router.post('/series', async (req, res) => {
    try {
        const NewSeries = await SeriesService.createSeries(req.body);
        return res.send(NewSeries);
    }catch {
        return res.status(500).send({ error });
    }
});

router.put('/series/:id', async (req, res) => {
    try {
        const { id } = req.params
        const UpdatedSeries = await SeriesService.updateSeries(id);
        return res.send(UpdatedSeries);
    }catch {
        return res.status(500).send({ error });
    }
});

router.delete('/series/:id', async (req, res) => {
    try {
        const { id } = req.params
        const DeletedSeries = await SeriesService.deleteSeries(id);
        return res.send(DeletedSeries);
    }catch {
        return res.status(500).send({ error });
    }
});

module.exports = router;
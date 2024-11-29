const express = require('express');
const NewsService = require('../services/NewsService');

const router = express.Router();

router.get('/news', async (req, res) => {
    try {
        const news = await NewsService.getNews();
        return res.send(news);
    }catch {
        return res.status(500).send({ error });
    }

});

router.post('/news', async (req, res) => {
    try {
        const news = await NewsService.createNews(req.body);
        return res.send(news);
    }catch {
        return res.status(500).send({ error });
    }

});

router.get('/news/:id', async (req, res) => {
    try {
        const { id } = req.params
        const news = await NewsService.getNewsById(id);
        return res.send(news);
    }catch {
        return res.status(500).send({ error });
    }
});

router.put('/news/:id', async (req, res) => {
    try {
        const { id } = req.params
        const news = await NewsService.updateNews(id, req.body);
        return res.send(news);
    }catch {
        return res.status(500).send({ error });
    }
});

router.delete('/news/:id', async (req, res) => {
    try {
        const { id } = req.params
        const news = await NewsService.deleteNews(id);
        return res.send(news);
    }catch {
        return res.status(500).send({ error });
    }

});

module.exports = router;
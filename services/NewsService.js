const { getDB } = require('../db')
const { ObjectId } = require('mongodb')

async function getNews() {
    const db = getDB()
    const news = await db.collection('news').find().sort().toArray()
    return news
}

async function getNewsById(id) {
    const db = getDB()
    return await db.collection('news').findOne({ _id: ObjectId.createFromHexString(id) })
}

async function createNews(newsData) {
    const db = getDB()
    return await db.collection('news').insertOne(newsData)
}

async function updateNews(id, newsData) {
    const db = getDB()
    return await db.collection('news').updateOne({ _id: ObjectId.createFromHexString(id) },
     { $set: newsData })
}

async function deleteNews(id) {
    const db = getDB()
    return await db.collection('news').deleteOne({ _id: ObjectId.createFromHexString(id) })
}

module.exports = {
    getNews,
    getNewsById,
    createNews,
    updateNews,
    deleteNews
}
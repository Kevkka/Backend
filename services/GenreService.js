const { getDB } = require('../db')
const { ObjectId } = require('mongodb')

async function getGenres() {
    const db = getDB()
    const genres = await db.collection('genres').find().sort().toArray()
    return genres
}

async function getGenreById(id) {
    const db = getDB()
    return await db.collection('genres').findOne({ _id: ObjectId.createFromHexString(id) })
}

async function createGenre(genreData) {
    const db = getDB()
    return await db.collection('genres').insertOne(genreData)
}

async function updateGenre(id, genreData) {
    const db = getDB()
    return await db.collection('genres').updateOne({ _id: ObjectId.createFromHexString(id) },
     { $set: genreData })
}

async function deleteGenre(id) {
    const db = getDB()
    return await db.collection('genres').deleteOne({ _id: ObjectId.createFromHexString(id) })
}

module.exports = {
    getGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
}
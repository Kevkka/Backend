const { getDB } = require('../db')
const { ObjectId } = require('mongodb')

async function getMovies() {
    const db = getDB()
    const movies = await db.collection('movies').find().sort().toArray()
    return movies
}

async function getMovieById(id) {
    const db = getDB()
    return await db.collection('movies').findOne({ _id: ObjectId.createFromHexString(id) })
}

async function createMovie(movieData) {
    const db = getDB()
    return await db.collection('movies').insertOne(movieData)
}

async function updateMovie(id, movieData) {
    const db = getDB()
    return await db.collection('movies').updateOne({ _id: ObjectId.createFromHexString(id) },
     { $set: movieData })
}

async function deleteMovie(id) {
    const db = getDB()
    return await db.collection('movies').deleteOne({ _id: ObjectId.createFromHexString(id) })
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}
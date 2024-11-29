const { getDB } = require('../db')
const { ObjectId } = require('mongodb')

async function getSeries() {
    const db = getDB()
    const series = await db.collection('series').find().sort().toArray()
    return series
}

async function getSeriesById(id) {
    const db = getDB()
    return await db.collection('series').findOne({ _id: ObjectId.createFromHexString(id) })
}

async function createSeries(seriesData) {
    const db = getDB()
    return await db.collection('series').insertOne(seriesData)
}

async function updateSeries(id, seriesData) {
    const db = getDB()
    return await db.collection('series').updateOne({ _id: ObjectId.createFromHexString(id) },
     { $set: seriesData })
}

async function deleteSeries(id) {
    const db = getDB()
    return await db.collection('series').deleteOne({ _id: ObjectId.createFromHexString(id) })
}

module.exports = {
    getSeries,
    getSeriesById,
    createSeries,
    updateSeries,
    deleteSeries
}
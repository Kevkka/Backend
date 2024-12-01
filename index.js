const express = require('express')
require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')

const { connectToDB, getDB } = require('./db')

const MoviesRoute = require('./routes/MoviesRoute')
const SeriesRoute = require('./routes/SeriesRoute')
const NewsRoute = require('./routes/NewsRoute')
const GenreRoute = require('./routes/GenreRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    req.db = getDB();
    next();
});

app.use('/', MoviesRoute)
app.use('/', SeriesRoute)
app.use('/', NewsRoute)
app.use('/', GenreRoute)



const port = process.env.PORT || 3000

connectToDB()
    .then(() => {
        app.listen(port, () => console.log(`Server is running at port ${port}.`))
    })
    .catch(error => console.error('Failed to connect:', error))
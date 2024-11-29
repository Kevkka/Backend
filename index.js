const express = require('express')
require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')

const { connectToDB } = require('./db')

const MoviesRoute = require('./routes/MoviesRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/movies', MoviesRoute)


const port = process.env.PORT || 3000

connectToDB()
    .then(() => {
        app.listen(port, () => console.log(`Server is running at port ${port}.`))
    })
    .catch(error => console.error('Failed to connect:', error))
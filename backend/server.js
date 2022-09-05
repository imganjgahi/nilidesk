const express = require("express");
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/places')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/places', placesRoutes)

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500).json({ message: error.message || "an unknown error accured!" })
})

const PORT = process.env.PORT || "5000"
app.listen(PORT)
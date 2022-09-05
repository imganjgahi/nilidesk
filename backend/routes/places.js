const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ message: "it's works" })
})
router.get('/:pid', (req, res, next) => {
    const error = new Error('Place Not Found')
    error.code = 404
    return next(error)
})

module.exports = router
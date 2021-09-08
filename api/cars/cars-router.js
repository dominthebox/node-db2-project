// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('getting all cars')
})

router.get('/:id', (req, res, next) => {
    res.json(`getting car with id ${req.params.id}`)
})

router.post('/', (req, res, next) => {
    res.json('posting new car')
})

module.exports = router
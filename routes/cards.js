const router = require('express').Router()
const mongoose = require('mongoose')
const Cards = mongoose.model('cards')

router.get('/', (req, res, next) => {
  Cards.find()
    .then(cards => res.json(cards))
    .catch(next)
})

module.exports = router

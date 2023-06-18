const router = require('express').Router();
const api = require('./api')
const tweets = require("../database/models/tweets.model")
router.use('/api', api)

router.get('/tweets/new', (req, res) => {
    res.render("tweets/tweet-form")
})

router.get('/', (req, res) => {
    tweets.find().then((tweets)=>{
        res.render('tweets/tweet-list', { tweets })
    })
})

module.exports = router;
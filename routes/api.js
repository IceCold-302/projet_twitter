const router = require("express").Router();
const tweets = require("./api.tweets")

router.use('/tweets/new', tweets)

module.exports = router
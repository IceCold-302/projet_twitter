const router = require("express").Router();
const Tweets = require("../database/models/tweets.model")

router.post("/", (req, res) => {
    const tweet = req.body;
    const newTweet = new Tweets(tweet);
    newTweet.save().then((doc) => {
        res.redirect("/")
        console.log(doc)
    }).catch((err) => {
        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
        res.status(404).render('tweets/tweet-form', { errors })
    })
})
module.exports = router
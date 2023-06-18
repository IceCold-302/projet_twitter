const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetsSchema = schema({
    content : {type: String, required:[true, "Ce champ est requis fratelo"], maxlength: [140, 'Tweet trop long mon pote'], minlength: [1, 'Tweet trop court mon pote']}
})

const Tweets = mongoose.model('tweets', tweetsSchema)

module.exports = Tweets
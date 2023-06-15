const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetsSchema = schema({
    content : {type: String, required:true, maxlength: 140, minlength: 1}
})

const Tweets = mongoose.model('tweets', tweetsSchema)

module.exports = Tweets
const mongoose = require('mongoose');
const schema = mongoose.Schema
mongoose.connect('mongodb+srv://icecoldx302:hpepIltZtiPOjfzM@test.kd2wgk4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('#####RESPONSE####OK')
    })
    .catch((err) => {
        console.log(err)
    }) 
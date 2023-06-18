const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://icecoldx302:Ui0CPMKGqLvN9Plz@cluster0.ixqdclm.mongodb.net/twitter?retryWrites=true&w=majority')
    .then(() => {
        console.log('#####RESPONSE####OK')
    })
    .catch((err) => {
        console.log(err)
    }) 
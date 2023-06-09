const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mvpsSchema = schema({
    title: { type: String, index: true },
    money: { type: Number, required: true },
    status: String,
}, { timestamps: true })

const Mvps = mongoose.model('mvps', mvpsSchema)

module.exports = Mvps;
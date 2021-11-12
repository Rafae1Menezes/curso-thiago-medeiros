const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number
},{ versionKey: false})

const Model = mongoose.model('products', schema)

module.exports = Model
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Product = new Schema({

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        maxLength: 255,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        maxLength: 255,
        required: true
    },
    description: {
        type: String,
        maxLength: 600,
        required: true
    },
    image: {
        type: String,
        maxLength: 255,
        required: true
    },
    createAt: { type: Date, default: Date.now },
    updateUP: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', Product);
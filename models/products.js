const mongoose = require('mongoose');

const prod = new mongoose.Schema({
    id: {
        type : Number,
        required : true
    },
    quote: {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Quote",prod);
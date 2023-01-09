const mongoose = require("mongoose");



const todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    iscompleted: {
        type: Boolean,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('items', todoschema)



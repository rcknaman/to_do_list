const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    Category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const data = mongoose.model('todolist', todoSchema);
module.exports = data;
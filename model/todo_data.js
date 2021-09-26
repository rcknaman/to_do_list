const mongoose= require('mongoose');

const todoSchema=new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const data = mongoose.model('todolist',todoSchema);
module.exports=data;
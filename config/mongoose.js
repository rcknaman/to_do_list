const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));
db.once('open', function() {
    console.log('successfully connected to db');
})
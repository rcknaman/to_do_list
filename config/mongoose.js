const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_db');

const db=mongoose.connection;
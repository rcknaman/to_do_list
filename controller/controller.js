// const db = require('../config/mongoose');

// const item=require('../model/todo_data');

module.exports.home=function(req,res){
    return res.end(' <h1>controller is running</h1>');
    // return res.render('home',{});
}
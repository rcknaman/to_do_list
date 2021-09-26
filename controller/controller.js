const db = require('../config/mongoose');

const item=require('../model/todo_data');

module.exports.home=function(req,res){
    // console.log('running');
    return res.end('running');
}
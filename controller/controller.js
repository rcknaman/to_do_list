const db = require('../config/mongoose');

const item = require('../model/todo_data');
module.exports.home = function(req, res) {

    item.find({},function(err,todolist){
        if(err){
            console.log(err);
            return err;
        }
        // console.log(todolist);
        return res.render('home',{
            title:"naman",
            list:todolist
        });
    });
}

module.exports.addToDo = function(req, res) {

    item.create({
        Category: req.body.Category,
        description: req.body.description,
        date: req.body.date
    }, function(err, newtask) {
        if (err) {
            console.log('error in creating contact!');
            return;
        }
        console.log(newtask);
    });
    // console.log(req.body);
    return res.redirect('back');

}

module.exports.deleteItem=function(req,res){

    let arr=req.query.values.split(" ");

    for(let temp of arr){
        item.findByIdAndDelete(temp,function(err){

            if(err){
                console.log('error in deleting item');
                return;
            }
        });
    }
    return res.redirect('back');


}
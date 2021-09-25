const express = require('express');
const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views','./views');

app.route('/','./router');


app.listen(port,function(err){

    if(err){
        console.log("Error",err);
    }
    else{
        console.log(`server is up and running on port: ${port}`);
    }

});
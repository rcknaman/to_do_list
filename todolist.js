const express = require('express');
const app=express();
const port=8000;
//app.use('/',require('./router/index')) is similar to app.use('/',require('./router')) but the entry point file must 
//be named 'index.js' otherwise it wil not work
app.use('/',require('./router'));
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){

    if(err){
        console.log("Error",err);
    }
    else{
        console.log(`server is up and running on port: ${port}`);
    }

});
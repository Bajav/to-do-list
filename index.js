const express = require("express");
const bodyparser =require("body-parser");
const ejs = require('ejs');
const app = express();

// app.use(bodyparser.urlencoded({extended:true}));

// app.use('view engine', 'ejs');

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000,()=>{console.log('its working sir')});
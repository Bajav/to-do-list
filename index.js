const express = require("express");
const bodyparser =require("body-parser");
const ejs = require('ejs');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/",function(req, res){
    res.render("app", {newitem :"ejs is working"});
});

app.listen(3000,()=>{console.log('its working sir')});
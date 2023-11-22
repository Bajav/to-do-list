const express = require("express");
const bodyparser =require("body-parser");
const ejs = require('ejs');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
// getting the date and time

const timeAndDay = new Date();
const time = timeAndDay.toLocaleTimeString();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const today = timeAndDay.toLocaleDateString();
app.get("/",function(req, res){
    res.render("app", {newitem :"ejs is working", today :today,time:time});
});

app.listen(3000,()=>{console.log('its working sir')});
const express = require("express");
const bodyparser =require("body-parser");
const ejs = require('ejs');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
// getting the date and time

const timeAndDay = new Date();
// time auto refresh

let time = "";

const currentTime = setInterval(() => {
  const timeAndDay = new Date();
  time = timeAndDay.toLocaleTimeString();
//   console.log(time);
}, 1000);

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const today = timeAndDay.toLocaleDateString("en-US", options);
app.get("/",function(req, res){
    res.render("app", {newitem :"ejs is working", today :today,time:time});
});

app.listen(3000,()=>{console.log('its working sir')});
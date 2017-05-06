var express = require("express");
var app = express();




app.get("/", function(req, res){
    res.render('home.ejs');
});


app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing});
});


app.get("*", function(req, res){
    res.send("hey");
});

app.listen(3000, function(){
    console.log('servers is running');
});
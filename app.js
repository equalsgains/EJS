var express = require("express");
var app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");



app.get("/", function(req, res){
    res.render('home');
});


app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   
   res.render("love", {thingVar: thing});
});

app.get("/posts", function (req, res) {
   var posts = [
       {
           title: "post1",
           author: "luis"
       },
       {
           title: "post2",
           author: "mom"
       },
       {
           title: "post3",
           author: "dad"
       }
   ];
   res.render("posts", {posts: posts});
});

app.get("*", function(req, res){
    res.send("hey");
});

app.listen(3000, function(){
    console.log('servers is running');
});
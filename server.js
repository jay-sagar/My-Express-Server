const express = require("express"); 

const app = express(); // express module

app.get("/", function(req, res){  // "/" -> this parameter define route. req -> request, res -> response
    res.send("<h1>Hello, world!</h1>");
});  // it allows what should happen when a browser gets in touch with our server and makes a get request.

app.get("/contact", function(req, res){
    res.send("Contact me at: jaysagar871@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Hello! My name is Jay");
});

app.get("/hobbies", function(req, res){
    res.send("Anime and Games");
});

app.listen(3000, function(){  // creates a channel of 3000
    console.log("Server started on port 3000");
});
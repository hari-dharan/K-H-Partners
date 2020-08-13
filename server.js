// {}
// jshint esversion:6

//Requiring the installed npm packages
const express = require("express");
const bodyParser = require("body-parser");

//Setting up express() method to app
const app = express();

//Use body-parser package
app.use(bodyParser.urlencoded({extended: true}));

//To render the static pages such as html, css, images etc
app.use(express.static(__dirname + "/Public"));



app.post("/contact.html", function(req, res) {
    res.send("Thank you");
});






app.listen(process.env.PORT || 3000, function(){    // process.env.PORT is to allow for heroku to deploy the app in whichever port it wishes to
    console.log("Server is running on port 3000");
});
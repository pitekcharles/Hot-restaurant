var express =require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = [];
var reservations = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});
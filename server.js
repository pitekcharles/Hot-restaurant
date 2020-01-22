var express =require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = [];
var waitlist = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res){
    res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    res.json(waitlist);
});

app.post("/api/tables", function(req, res){
    var newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newCharacter);
});

app.post("/api/waitlist", function(req, res){
    var newWaitlist = req.body;

    console.log(newWaitlist);

    tables.push(newWaitlist);

    res.json(newWaitlist);
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
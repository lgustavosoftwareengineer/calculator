const express = require("express")
const handlebars = require("express-handlebars")
const server = express()
const path = require("path");
const bodyparser = require('body-parser')

// Configuring the statics files
    server.use(express.static(__dirname + '/public'));
// Configuring the body-parser
    server.use(bodyparser.urlencoded({extended: true}));
    server.use(bodyparser.json());
//Configuring the HandleBars
        server.engine("handlebars", handlebars({defaultLayout: "main"}));
        server.set("view engine", "handlebars");



server.get("/", (req, res) => {
    res.render("calc", {title: "Main Page"})
})
server.post("/calculated", (req, res) => {
    var response = eval(req.body.values);
    res.render("calc", {response: response, title: "Calculator"})
})
server.get("/cleaning", (req, res) => {
    var response = req.body.values = " ";
    res.render("calc", {response: response, title: "Calculator"})
})

//Route that realize the operations
/**server.get("/:op/:v1/:v2", (req, res) => {
    var resul = eval(req.params.v1+req.params.op+req.params.v2)
    res.render("calculator", {resul: resul})
    
}) */



var PORTA = 8081;
server.listen(PORTA, ()=>{
    console.log("O servidor está rodando na porta localhost...")
})
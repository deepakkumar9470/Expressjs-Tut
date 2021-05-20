const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {check, validationResult} = require("express-validator");
//app.use(bodyParser.urlencoded());
const urlencoded = bodyParser.urlencoded({extended:false});


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})
// app.get("/", (req, res)=>{
//     res.send("");
// })
app.post("/submit-form",urlencoded, (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    res.json(req.body);
})


app.listen(1600, (req, res)=>{
    console.log("App is running on port 1600");
})
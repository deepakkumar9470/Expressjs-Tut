const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("This is Home Page")
})
app.get("/about", (req, res)=>{
    res.send("This is About Page")
})
app.get("/contact", (req, res)=>{
    res.send("This is Contact Page")
})

app.listen(5500, (req, res)=>{
    console.log("Your port running on 5500");
})
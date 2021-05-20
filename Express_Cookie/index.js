const express = require("express");
const app = express();
const cookiePaser = require("cookie-parser");

app.use(cookiePaser());
app.get("/", (req,res)=>{
    res.send("ExpressJS Cookie");
});
app.get("/cookie", (req,res)=>{
    res.cookie("name", "Deepak Chouhan");
    res.send("Cookie Set..")
});

app.get("/cookie_s", (req,res)=>{
    res.send(req.cookies);
});



app.listen(4000, (req, res)=>{
    console.log("App is running on port 4000");
});






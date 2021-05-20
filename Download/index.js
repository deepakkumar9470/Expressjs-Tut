const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    res.download("../index.html", (err)=>{
        if(err){
               return err;
        }else{
             console.log("Everything is fine");
        }
    });
})

app.listen(1200, (req, res)=>{
    console.log("App is running on port 1200");
})
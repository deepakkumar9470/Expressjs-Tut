const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({secret:"shvsvhss",
resave:false,
cookie:{secure:true}}));
app.get("/", (req,res)=>{
    res.send("ExpressJS Cookie");
});
app.get("/sess", (req,res)=>{
    if(req.session.count){
       req.session.count++;
       res.send("Session Count:"+req.session.count);
    }else{
        req.session.count= 1;
        res.send("First Session Count:"+req.session.count);
    }
});


app.listen(4000, (req, res)=>{
    console.log("App is running on port 4000");
});






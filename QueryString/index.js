/*const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    console.log(req.query);
    res.send("<h2>This is Query String topic</h2>");
    for(const key in req.query){
        console.log(key, req.query[key]);
    }
})

app.listen(1500, (req, res)=>{
    console.log("App is running on 1500 port");
})*/

const express = require("express");
const app = express();
 
app.get("/go-there", (req, res)=>{
    res.send("Hello My Self Deepak Kumar Chouhan. I am 25 years old..");
})
app.get("/about", (req, res)=>{
    res.send("Hello My Self Suraj Kumar Chouhan. I am 17 years old..");
})
app.get("/", (req, res)=>{
   res.redirect(301, "/about");

})



app.listen(1500, (req, res)=>{
    console.log("App is running on 1500 port");
})
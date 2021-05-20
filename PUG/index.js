const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views" ,"./views")
// app.get("/", (req, res)=>{
//     res.send("Pug Template")
// })
app.get("/", (req, res)=>{
    res.render("index", {
        name:"Suraj Kumar",
        age:25
    })
})
app.listen(4000 ,(req, res)=>{
    console.log("Port 4000")
})

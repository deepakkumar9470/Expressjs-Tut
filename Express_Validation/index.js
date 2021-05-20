const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {check, validationResult} = require("express-validator");

const urlencoded = bodyParser.urlencoded({extended:false});


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/register", (req, res)=>{
    res.render("register");
})
app.post("/register",urlencoded ,[
    check("username", "This Username must be full")
    .exists()
    .isLength({min:3}),
    check("email", "Email isn't valid")
    .isEmail()
    .normalizeEmail()
    

],(req, res)=>{
 
   const errors = validationResult(req);

   if(!errors.isEmpty()){
       const alert = errors.array();
       res.render("register" , {
           alert
       })
    return res.status(422).json({ errors: errors.array() })
   }

   const username  = req.body.username
   const email = req.body.email
   
   res.json(req.body);
})

app.listen(1500, (req, res)=>{
    console.log("App is running on port 1500");
})
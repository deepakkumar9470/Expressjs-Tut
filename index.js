const express = require("express");
const app = express();
const PORT = 9000;
app.set('view engine', 'hbs');

// app.set('views', 'template'); to change default 'view' dir to 'template' dir

app.get('/',(req, res)=>{
    res.render('index');
})
app
app.get('/', (req,res)=>{
    res.send("<h2>My Mother is Manti Devi, Father is Arun Chouhan</h2>");
})
app.get('/about', (req,res)=>{
    res.send("<h2>This is my about page hurray!..</h2>");
})


app.get('/html', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.get('/json', (req, res)=>{
    res.send([{
        id:1,
        name:"Deepak Kumar"
    },{
        id:2,
        name:"Abhinav Kumar"
    },{
        id:3,
        name:"Dhiraj Kumar"
    }
]);
})
app.listen(PORT, (req, res)=>{
    console.log('App is running on port 9000');
})
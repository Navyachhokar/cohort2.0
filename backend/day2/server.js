const express = require("express");

const app = express();// creates  server instance

app.get('/',(req,res)=>{
    res.send("Hello world")
} )
app.get('/about',(req,res)=>{
    res.send("This is about page")
} )
app.get('/home',(req,res)=>{
    res.send("This is home page")
} )

app.listen(3000);// starts server 

//use `npx nodemon {filename}` to run the server
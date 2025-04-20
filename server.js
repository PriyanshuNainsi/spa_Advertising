const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"))
})

app.post("/login",(req,res)=>{
    const {username,password}=req.body;

    if(username==="zenalSPA" && password==="pass1234"){
        res.redirect("/welcome")
    }else{
        res.send("Invalid password or username")
    }
})

app.get("/welcome",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","Spa.html"));
})

app.listen(port,()=>{
    console.log(`server is running on the http://localhost:${port}`);
});
const express= require ("express");
const bodyParser=require("body-parser")
const mongo = require ('mongodb')
const app=express();
const mongoose = require('mongoose')
const url = "mongodb+srv://pankhuree:Pankhu14@foodstalker.e13qq.mongodb.net/test?retryWrites=true&w=majority";
const cors=require('cors');
const { json } = require("express/lib/response");
const User =require("./model")
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin:true,credentials:true}));

app.get('/test',function(req,res){
    res.status(200).send("I am running");
})

app.use(express.json())
app.post("/api/signup", function(req,res){
    User.create(req.body)
    .then(user => res.json({ msg: 'ok' }))
    .catch(err => res.status(200).json({ error: err,msg:'notok' }));
})
app.listen(3001,function(){
    console.log("Server is running on 3001");
});

mongoose.connect(url,{
    useNewUrlParser: true,
    
 } ).then(() => {
    console.log('connection succesfull');
}).catch((err)=> console.log(err))




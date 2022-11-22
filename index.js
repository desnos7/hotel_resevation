
const express = require ("express")
const app = express();
const mongoose =require ("mongoose")
const hotel = require ("./route/hotel.js")

const dotenv = require("dotenv").config() 
 app.use(express.json())


     mongoose.connect(process.env.MONGO)
     .then((res)=>{
        console.log("server connect");
     })
     .catch((err)=>{
        console.log("fxghcxhcg",err);
     })
     
   app.use('/',hotel)


 app.listen(8080,()=>{
    console.log('server correct')
 })
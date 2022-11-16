
const express = require ("express")
const app = express();
const mongoose =require ("mongoose")

const dotenv = require("dotenv").config() 



//  try{
     mongoose.connect(process.env.MONGO)
     .then((res)=>{
        console.log("server connect");
     })
     .catch((err)=>{
        console.log("fxghcxhcg",err);
     })
     
    // }catch (error){
    //  throw error;
    // }




 app.listen(8080,()=>{
    console.log('server correct')
 })

const mongoose= require('mongoose')
const { Schema } = mongoose;

 const User = new Schema({
    title:  String, 
    author: String,
    distance:{
        type:String,
        required:true
    },
    desc:{
   type: String,
   required:true
    }   
  });
 const user = mongoose.model("hotel", User);
  module.exports = user
  

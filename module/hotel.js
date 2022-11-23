
const mongoose= require('mongoose')
const bcrypt = require('bcryptjs')
const { Schema } = mongoose;

 const User = new Schema({
    title:  String,
    desc:{
   type: String,
   required:true
    },
    password:{
      type:String,
    required:true
    }  
  });



 const user = mongoose.model("hotels", User);

 module.exports = user
  

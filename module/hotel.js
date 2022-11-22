
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
//bcript utlisation de .pre pour crypter avant sauvegarde ('save')
User.pre('save',async function(){
  if (this.isModified('password')) this.password= await bcrypt.hash(this.password, 8)
})



 const user = mongoose.model("hotels", User);

 module.exports = user
  

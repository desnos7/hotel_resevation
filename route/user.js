const express= require ("express");
const user = require("../module/user.js");
const  login = require("../module/user.js");



const router= express.Router();

router.post("/",async (req,res)=>{
    console.log(req.body);
   try {
    const login = await user.findEmail(req.body.email)
if(login){
  const logEmail= new user(req.body)
  const log= await logEmail.save()
   res.status(200).json({...log,password:undefined})
}   
   } catch (error) {
      console.log(error);
    res.status(400).send(error)
   } 
})

router.post("/connexion", async(req,res)=>{
   try {
    const logcon= await user.findCon(req.body.email,req.body.password)
    console.log(logcon)
   res.send(logcon)
   } catch (error) {
      console.log('cklnez', error)
    res.status(400).send(error)
   }
})






 module.exports = router





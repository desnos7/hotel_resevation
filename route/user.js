const express= require ("express");
const user = require("../module/user.js");





const router= express.Router();

router.post("/", async (req,res)=>{
    console.log(req.body);
    const inscr = await user.finduser(req.body.email)
    console.log('user', inscr);
    if (inscr === null ){
        const newhotel =  new user(req.body)   
    const savehotel= await newhotel.save()
    res.status(200).json(savehotel)
       
    }else{
        res.status(400).send('email existe')
    }
  
 })


 router.post("/conexion",async(req,res)=>{
    console.log(req.body);

 try {
    const connexion=await user.finduser_con(req.body.email,req.body.password)
  
    res.send(connexion)
  } catch (error) {
    res.status(400).send(error)
  }


 })

 module.exports = router





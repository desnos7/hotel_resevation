const express= require ("express");
const user = require("../module/hotel");



const router= express.Router();

router.post("/",(req,res)=>{
    console.log(req.body);
    const newhotel = new user(req.body)
    console.log(newhotel);
    try{
        const savehotel= newhotel.save()
        res.status(200).json(savehotel)
    }catch(err){
        res.status(500).json(err)
    }
})
router.get('/',(req,res)=>{
    res.status(200).json("savehotel")
})

module.exports = router
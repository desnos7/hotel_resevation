const express= require ("express");
const user = require("../module/hotel");



const router= express.Router();

router.post("/", async (req,res)=>{
    console.log(req.body);
    const newhotel =  new user(req.body)
    try{
        const savehotel= await newhotel.save()
        res.status(200).json(savehotel)
    }catch(err){
        res.status(500).json(err)
    }
})

//READ  all the elements of the database
router.get("/", async (req,res)=>{
try{
    const users= await user.find({});
    res.send(users);
}catch(error){
    res.status.send(error)
}
})

//READ by of id User
router.get("/:id", async (req,res)=>{
    const updateInfo = object.keys(req.body) 
    console.log(updateInfo)
   const findId= req.params.id
try{
    const userId= await user.findById(findId)
    updateInfo.forEach(put => user[put]=req.body[put] );
    await userId.save();
    res.send(userid) 
}catch(e){
    res.status(500).send(e)
}
})


//update recuperer toujours l'ID
// router.put("/:id", async (req,res)=>{
 
//  console.log(updateInfo)
// const UserId= req.params.id
//     try {
//         const update= await user.findByIdAndUpdate(UserId,req.body)
       
//         upd
//         if(!update) return res.status(404).send('update not found!');
//         res.send(update)
//     } catch (error) {
//         res.status(500).send(error)
        
//     }
// })
// delete recuperer toujours l'ID

router.delete("/:id", async (req,res)=>{
    const deleteId= req.params.id
    try {
        const Delete = await user.findByIdAndDelete(deleteId,req.body)
        if(!update) return res.status(404).send('update not found!');
        res.send(Delete)
    } catch (error) {
        res.status(500).send(error)    
    }
})



module.exports = router
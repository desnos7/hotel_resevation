const express= require ("express");
const user = require("../module/hotel");




const router= express.Router();

router.post('/', async(req,res)=>{
 console.log(req.body)
 try {
   const create= new user(req.body)
  const creat = await create.save()
  res.status(200).json(creat)    
 } catch (error) {
    res.status(400).send(error)
 }
})

router.get('/',async(req,res)=>{    
try{
    const read= await user.find({});
    res.send(read)
}catch (e){
    res.status(400).send(e)
}
})

router.get ("/:id", async (req,res)=>{
    // const readInfo = Object.keys(req.body)  
    //  console.log(readInfo);
     const readId=req.params.id 
     try {
   const read= await user.findById(readId)
//    readInfo.forEach(get=> {
//               user[get]=req.body[get]             
//    }); 
//  await read.save();        
   res.send(read)  
        
     } catch (error) {
        res.status(500).send(error)
     }
})
 

router.put('/:id',async(req,res)=>{

   const putId=req.params.id
try {
    update= await user.findByIdAndUpdate(putId,req.body)
    if(!update) return res.status(404).send("il n existe pas");
    res.send(update) 
  
} catch (error) {
    res.status(500).send(error)
}

})

router.delete("/:id",async (req,res)=>{
  const deletId= req.params.id
 try {
    const Delete = await user.findByIdAndDelete(deleId,req.body)
     if(!Delete)return res.status(404).send('not found')
     res.send(Delete)
    
 } catch (error) {
    res.status(500).send(error)
 }
})










module.exports = router
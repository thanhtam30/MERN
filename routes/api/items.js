const express=require('express')
const router=express.Router();
const item=require('../../models/Item')
router.get('/',(req,res)=>{
    item.find({date:-1}).then((items)=>res.json(items))
})
router.post('/',(req,res)=>{
    const newItem=new item({
        name:req.body.name
    })
    newItem.save().then((item)=>res.json(item))
})
router.delete('/:id',(req,res)=>{
    item.findById(req.params.id).then((item)=>item.remove().then(()=>res.json({success:true})))
    .catch((err)=>res.status(404).json({success:false}))
})
module.exports=router;
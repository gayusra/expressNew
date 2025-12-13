const express = require('express')
const router = express.Router()
const studentSchema = require('../schema/userModel')


router.get('/', async(req,res)=>{
    try{
      const students =  await studentSchema.find()
      res.status(200).json(students)
    }catch(err){
       res.status(400).json({error:err.message})
    }
})
router.post('/',async(req,res)=>{
  try{
    const newstudents =   new studentSchema(req.body)
  const savedstudent = await newstudents.save()
  res.status(201).json(savedstudent)
  }catch(err){
    res.status(400).json({error:err.message})
  }
  
  
})



module.exports = router
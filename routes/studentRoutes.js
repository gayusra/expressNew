const express = require('express')
const router = express.Router()


const students = [
    {id:1,name:'john',course:'AI'},
    {id:2,name:'smith',course:'Fsd'},
    {id:3,name:'doe',course:'python'}
]

router.get('/',(req,res)=>{
    res.status(200).send(students)
})

router.post('/',(req,res)=>{
    const newStd = req.body
    students.push(newStd)
    res.status(201).send({message:'student added successfully'})

})

module.exports = router


/* const express = require('express')
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

router.put('/:id',async(req,res)=>{
  try{
    const updatedStudent =  await studentSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}

    )

    if(!updatedStudent){
      return res.status(404).json({message:'student not found'})
    } 
    res.status(200).json(updatedStudent)

  }catch(err){
    res.status(400).json({err:err.message})
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const deletestudent =  await studentSchema.findByIdAndDelete(req.params.id)

    if(!deletestudent){
      return res.status(404).json({message:'student not found'})
    }

    res.status(200).json({message:'student deleted successfuly'})
  }catch(err){
    res.status(400).json({err: err.message})
  }
})



module.exports = router */
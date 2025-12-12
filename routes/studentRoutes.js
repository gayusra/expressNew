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
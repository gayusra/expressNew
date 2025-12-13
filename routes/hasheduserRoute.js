const express = require('express')
const router = express.Router()
const hashedUser = require('../schema/userHash')
const bcrypt = require('bcryptjs')



//without hash the password
/* router.post('/register',async(req,res)=>{
    try{
        const {username,password} = req.body

        if(!username || !password) {
            return res.status(400).json({message:'username and password are required'})
        }

        const newUser = new hashedUser({username,password})
        await newUser.save()

       res.status(201).json({message:'user added successfully'})
    }catch(err){
       res.status(500).json({error:'error registering user',details:err.message})
    }
}) */

//with hash the password

router.post('/register',async(req,res)=>{
    try{
        const {username,password} = req.body

        if(!username || !password){
            return res.status(400).json({message:'username and password required'})
        }

        //generate salt and hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //create new user
        const newUser = new hashedUser({username,password:hashedPassword})
        await newUser.save()

        res.status(201).json({messge:'user added successfuly'})


    }catch(err){
       console.log(err)
       res.status(500).json({error:'error registering user', details:err.message})
    }
})
//eg
//password:gayu123 + salt :  g12a46y2dshdg4g17dh1hger2mlj7fh3jn  -- salt means generate variables randomly

router.post('/login',async(req,res)=>{
    try{
       const {username,password} = req.body
       
       //validate input
       if(!username || !password){
         return res.status(400).json({message:'username and password are required'})
       }

       //find the user by username
       const user = await hashedUser.findOne({username})
       if(!user){
         return res.status(404).json({message:'user not found'})
       }

       //compare entered password with hashed password
       const isMatch = await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.status(401).json({message:'invalid credentials'})
       }

       //everything is correct
       res.status(200).json({message:'Login successful'})


    }catch(err){
       console.log(err)
       res.status(500).json({error:'error logging in',details:err.message})
    }
})



module.exports = router
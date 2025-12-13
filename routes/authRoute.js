const express = require('express')
const route = express.Router()
//const User = require('../model/user')
const bcrypt = require('bcryptjs')

//register route
route.post('/register', async(req,res)=>{
   const {username,email,password} = req.body

   //validation
   if(!username || !email || !password){
     return res.send('All fields are required')
   }

   //check email already exist
   const existingUser = await User.findOne({email})
   if(existingUser) return res.send('User already exists')

    //hash password
    const hashedPassword = await bcrypt.hash(password,10)

    //save user
    const newUser =new User({
        username,
        email,
        password:hashedPassword
    })
    await newUser.save()
    res.send('registration successful')

})

//login user
route.post('/login',async(req,res)=>{
    const {email,password} = req.body

    //validation
    if(!email || !password){
        return res.send('email and password are required')
    }

    //check user exits
    const user = await User.findOne({email})
    if(!user) return res.send('user not found')
    
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) return res.send('incorrect password!')

    res.send('login successfully')
})

module.exports = route
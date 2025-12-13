const express = require('express')
const mongoose = require('mongoose')
const hashedRoutes = require('./routes/hasheduserRoute')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/hashDB')
.then(()=>console.log('mongodb connected successfully'))
.catch(err=>console.log('mongodb connection error',err))


app.use('/api',hashedRoutes)


app.listen(5500,()=>{
    console.log('server is running on the port 5500')
})
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const livewirestdRouter = require('./routes/livewirestdRoute')

app.use(express.json())

const mongoURI = 'mongodb://127.0.0.1:27017/practiceDB'

mongoose.connect(mongoURI)
.then(()=>console.log('mongodb connected successfully'))
.catch(err =>console.log('mongodb connection err'))

app.get('/',(req,res)=>{
    res.send('hello from express + mongodb')
})

app.use('/api/student',livewirestdRouter)




app.listen(4000,()=>{
    console.log('server is running on the port 4000')
})
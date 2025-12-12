const express = require('express')
const app = express()
const studentRouter = require('./routes/studentRoutes')
const productRouter = require('./routes/productRoutes')
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/students',studentRouter)
app.use('/api/products',productRouter)

/* let person = [
    {name:'gayu',course:'fsd'},
    {name:'janani',course:'mern'},
    {name:'livewire',course:'python'}
]


app.get('/students',(req,res)=>{
    res.status(200).send('welcome to express ')
    
})

app.get('/persons',(req,res)=>{
    res.status(200).send(person)
}) */







app.listen(4500,()=>{
    console.log('server is running on the port 4500')
})
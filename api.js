const express = require('express')
const app = express()

app.use(express.json())

const students = [
    {id:1,name:'john'},
    {id:2,name:'gayu'},
    {id:3,name:'janani'}
]

let products = [
    {id:1, name:'Laptop', price:1000},
    {id:2, name:'Phone', price:500},    
    {id:3, name:'Tablet', price:300},
    {id:4, name:'Monitor', price:200},
    {id:5, name:'Keyboard', price:50}    
];

app.get('/api/products',(req,res)=>{
    res.send(products);
})





app.get('/api/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id)
    if(isNaN(productId)){
        return res.status(400).send({error:'Invalid product id'})
    }

    const product = products.find((p)=>p.id === productId)
    if(product){
        return res.send(product)
    }
    return res.status(404).send({error:'product not found'})
})




app.post('/api/products',(req,res)=>{
    const newProduct = req.body
    products.push(newProduct)
    res.status(201).send({message:'Product added successfully', product:newProduct});
})


/* app.put('/api/products/:id',(req,res)=>{
     let productId = parseInt(req.params.id)
     let updateproduct = req.body

       products = products.map((p)=>
        p.id === productId ? {...p, ...updateproduct} : p
    )
      res.send({message:'Product updated successfully', product:updateproduct});
}) */

app.delete('/api/products/:id',(req,res)=>{
    const productDeleteId = parseInt(req.params.id)
    products = products.filter((p)=>p.id !==productDeleteId)
    res.send({message:'product deleted successfully'})
})




/* app.get('/',(req,res)=>{
    res.send('welcome to express server')
}) 

app.get('/api/students',(req,res)=>{
    res.status(200).send(students)
})


app.post('/api/students',(req,res)=>{
    const newStudents = req.body
    students.push(newStudents)
    res.status(201).send({message:'new students added successfully!', newStudents})
})  */


app.listen(4040,()=>[
    console.log('server is running on the port 4040')
])
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

/* app.get('/',(req,res)=>{
    
    res.status(200).sendFile('/home.html',{root: __dirname});
}) */

app.get('/home',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, 'View', 'home.html'));
})


app.get('/about',(req,res)=>{
    res.status(200).sendFile('/about.html',{root: __dirname});
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page');
    
})

app.get('/services',(req,res)=>{
    res.send('Services Page');
})






app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})
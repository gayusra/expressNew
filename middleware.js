const express = require("express");
const app = express();



// Middleware function
function myLogger(req, res, next) {
  console.log("Request URL:", req.url);
  console.log("Method:", req.method);
  next();  // move to the next step
}

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Home Page");
});


/* app.use((req,res,next)=>{
    console.log('first middleware executed');
    next()
  
})

app.use((req,res,next)=>{
    console.log('second middleware executed');
    next()
    
})

app.use((req,res,next)=>{
    console.log('third middleware executed');
    res.send('<h1>Hello from Middleware</h1>');
    
}) */

//middeware example for role based access

const checkAdmin = (req, res, next) => {
  const isAdmin = false; // example check
  if (isAdmin) {
    next(); // allow access
  } else {
    res.status(403).send("Access denied");
  }
};

app.get("/admin", checkAdmin, (req, res) => {
  res.send("Welcome Admin!");
}); 

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

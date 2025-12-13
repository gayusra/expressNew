const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser()); // middleware to read cookies

// Route to set a cookie
app.get('/setcookie', (req, res) => {
  res.cookie('username', 'JohnDoe', { maxAge: 60000 }); // expires in 1 min
  res.send('Cookie has been set!');
});

// Route to read cookie
app.get('/getcookie', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`Welcome back, ${username}!`);
  } else {
    res.send('No cookie found, please set one!');
  }
});

// Route to clear cookie
app.get('/clearcookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie has been cleared!');
});

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});


//Think of cookies like a note that the browser keeps for the website:
/* 
The website writes your name on the note (setcookie).

When you visit again, the browser shows the note (getcookie).

If you don’t need it, the website can throw it away (clearcookie). */
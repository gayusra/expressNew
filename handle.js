const express = require('express');
const app = express();
const path = require('path');

// Set Handlebars as the view engine
app.set('view engine', 'hbs');

// Optional: set views directory (default is "./views")
app.set('views', path.join(__dirname, 'views'));

// Route for home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    name: 'Gayathri'
  });
});

// Route for about page
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    description: 'This is a sample about page using Handlebars.'
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

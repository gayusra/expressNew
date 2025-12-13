const express = require('express');
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Define a route
app.get('/', (req, res) => {
  const user = { name: 'Gayathri', age: 22 };
  const products = ['Tiles', 'Faucets', 'Wash Basins'];

  // Render the pug template and pass data
  res.render('index', { user, products });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

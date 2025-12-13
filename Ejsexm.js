const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (optional)
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
  const user = { name: 'Gayathri', age: 22 };
  const products = ['Tiles', 'Faucets', 'Wash Basins'];
  
  // Render 'index.ejs' and pass data to it
  res.render('index', { user, products });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

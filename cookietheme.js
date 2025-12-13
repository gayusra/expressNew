const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // to read form data

// 🏠 Home route – shows current theme
app.get('/', (req, res) => {
  const theme = req.cookies.theme || 'light'; // default theme
  res.send(`
    <body style="background-color: ${theme === 'dark' ? '#333' : '#fff'};
                 color: ${theme === 'dark' ? '#fff' : '#000'};
                 font-family: Arial; text-align: center; padding-top: 50px;">
      <h1>Welcome!</h1>
      <p>Current theme: <strong>${theme}</strong></p>

      
      <form method="POST" action="/set-theme">
        <label>Choose Theme:</label>
        <select name="theme">
          <option value="light" ${theme === 'light' ? 'selected' : ''}>Light</option>
          <option value="dark" ${theme === 'dark' ? 'selected' : ''}>Dark</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </body>
  `);
});

// 🎨 POST route to set the cookie
app.post('/set-theme', (req, res) => {
  const { theme } = req.body;
  res.cookie('theme', theme, { maxAge: 86400000 }); // 1 day
  res.redirect('/'); // redirect back to home
});

// 🚀 Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
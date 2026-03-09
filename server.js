const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Fake database for login
const users = [
  { username: 'admin', password: 'admin123' }
];

// Serve homepage with dynamic content
app.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  let html = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');
  
  // Replace placeholders
  html = html.replace('{{title}}', data.title)
             .replace('{{background}}', data.background)
             .replace('{{paint1_title}}', data.paint1.title)
             .replace('{{paint1_img}}', data.paint1.img);
  res.send(html);
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple SQL-like injection test
  if(username.includes("'") || password.includes("'")){
    return res.send('<h3 style="color:red">SQL injection detected!</h3><a href="/login.html">Back</a>');
  }

  const user = users.find(u => u.username === username && u.password === password);
  if(user){
    res.redirect('/dashboard.html');
  } else {
    res.send('<h3 style="color:red">Enter username/password correctly!</h3><a href="/login.html">Back</a>');
  }
});

// Dashboard update
app.post('/update', (req, res) => {
  const { title, background, paint1_title, paint1_img } = req.body;
  const newData = {
    title, background,
    paint1: { title: paint1_title, img: paint1_img }
  };
  fs.writeFileSync('data.json', JSON.stringify(newData, null, 2));
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
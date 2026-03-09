// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple SQL-like injection detection
  if(username.includes("'") || password.includes("'")){
    return res.send('<p style="color:red">SQL injection detected!</p>');
  }

  // Admin credentials
  if(username === 'admin' && password === 'admin123'){
    return res.redirect('/dashboard.html');
  }

  // Wrong login
  res.send('<p style="color:red">Enter username/password correctly!</p>');
});

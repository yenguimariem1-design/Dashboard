const express = require('express');
const path = require('path');
const data = require('./data/olivesoft_followers.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/olivesoft_followers', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Dashboard server running at http://localhost:${port}`);
});

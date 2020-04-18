const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.port || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Apis here
app.get('/api/notes', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    console.log(JSON.parse(data));
    res.json(JSON.parse(data));
  });
});

app.listen(app.get('port'),() => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

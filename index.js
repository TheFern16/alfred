const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1337;
const host = '0.0.0.0';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, host, () => {
  console.log('I am listening');
});
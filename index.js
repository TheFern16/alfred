const express = require('express');

const port = 1337;
const host = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, host, () => {
  console.log('I am listening');
});
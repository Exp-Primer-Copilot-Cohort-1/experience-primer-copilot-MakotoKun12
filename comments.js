//Create web server
const express = require('express');

//Import the comments.json file
const comments = require('./comments.json');

//Create a route for /comments
app.get('/comments', (req, res) => {
  //Send the comments object back to the client
  res.send(comments);
});

//Start the web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});const express = require('express');
const app = express();
const port = 3000;

//Import the comments.json file
const comments = require('./comments.json');

//Create a route for /comments
app.get('/comments', (req, res) => {
  //Send the comments object back to the client
  res.send(comments);
});

//Start the web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
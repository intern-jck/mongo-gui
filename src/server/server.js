const fs = require('fs');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = 3000;
app.use(express.static('public'));

const {getProjects} = require('./controller/controller.js');

app.get('/', (req, res) => {
  console.log('GET');
  getProjects()
  .then((data) => (console.log(data)))
  .catch((error) => (console.log(error)));
});

app.listen(PORT, () => {
  console.log(`Project Maker @ http://127.0.0.1:${PORT}`);
});

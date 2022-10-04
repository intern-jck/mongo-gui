const fs = require('fs');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = 3000;
app.use(express.static('public'));

const {getProjects, addProject} = require('./controller/controller.js');

app.get('/projects', (req, res) => {
  console.log('GET');
  getProjects()
  // uncomment for testing
  // .then((data) => (res.sendStatus(200)))
  .then((data) => {
    console.log(data)
    res.send(data)
  })
  .catch((error) => (console.log('get error', error)));
});

app.post('/project', (req, res) => {
  console.log(req.body);
  // res.sendStatus(201)
  addProject(req.body)
    .then((data) => (res.sendStatus(201)))
    .catch((error) => (console.log('post error', error)));
});

app.listen(PORT, () => {
  console.log(`Project Maker @ http://127.0.0.1:${PORT}`);
});

const fs = require('fs');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = 3000;

const {getProjects, updateProject, createProject} = require('./controller/controller.js');

app.get('/projects', (req, res) => {
  console.log('GET');
  getProjects()
  // uncomment for testing
  // .then((data) => (res.sendStatus(200)))
  .then((data) => {
    console.log('SERVER GOT: ', data)
    res.send(data)
  })
  .catch((error) => (console.log('get error', error)));
});

app.post('/project', (req, res) => {
  console.log(req.body);
  // res.sendStatus(201)
  updateProject(req.body)
    .then((data) => (res.sendStatus(201)))
    .catch((error) => (console.log('post error', error)));
});

app.post('/create', (req, res) => {
  console.log('New Project: ', req.body);
  createProject(req.body)
    .then((data) => (res.sendStatus(201)))
    .catch((error) => (console.log('post error', error)));
});

app.listen(PORT, () => {
  console.log(`Project Maker @ http://127.0.0.1:${PORT}`);
});

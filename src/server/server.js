const fs = require('fs');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = 3000;

const {createDocument, getDocuments, updateDocument, deleteDocument} = require('./controller/controller.js');

// CREATE
app.post('/document', (req, res) => {
  createDocument(req.body)
    .then((data) => (res.sendStatus(201)))
    .catch((error) => (console.log('post error', error)));
});

// READ
app.get('/documents', (req, res) => {
  console.log('GETTING DocumentS');
  getDocuments()
    .then((data) => (res.send(data)))
    .catch((error) => (console.log('get error', error)));
});

// UPDATE
app.put('/document', (req, res) => {
  updateDocument(req.body)
    .then((data) => (res.sendStatus(202)))
    .catch((error) => (console.log('put error', error)));
});

// DELETE
app.delete('/document', (req, res) => {
  console.log(req.query.id)
  deleteDocument(req.query.id)
    .then((data) => (res.sendStatus(202)))
    .catch((error) => (console.log('delete error', error)));
});

app.listen(PORT, () => {
  console.log(`MongoDB GUI Server @ http://127.0.0.1:${PORT}`);
});

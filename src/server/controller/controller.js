const mongoose = require('mongoose');
const Document = require('../model/model.js');

mongoose.connect('mongodb://localhost:27017/mongogui')
  .then((data) => (console.log('mongodb success!')))
  .catch((error) => (console.log(error)));

// Create a document
const createDocument = (projectData) => {
  console.log('creating document');
  return Document.create(projectData);
};

// Read all documents
const getDocuments = () => {
  console.log('getting documents');
  return Document.find().exec();
};

// Read a document
const getDocument = (id) => {
  console.log('getting document', id);
  return Document.find({_id: id}).exec();
}

// Update a document
const updateDocument = (projectData) => {

  const filter = { '_id': projectData._id };

  const update = {
    text_0: projectData.text_0,
    text_1: projectData.text_1,
    text_3: projectData.text_3,
    docDate: projectData.docDate,
    tags: projectData.tags,
    photos: projectData.photos,
  };

  const options = { 'upsert': false };

  console.log('updating document', id)
  return Document.findOneAndUpdate(filter, update, options).exec();
}

// Delete a document
const deleteDocument = (id) => {
  console.log('deleting document', id)
  return Document.deleteOne({_id: id}).exec();
};

module.exports = {
  createDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
};

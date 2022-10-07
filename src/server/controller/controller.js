const mongoose = require('mongoose');
const Project = require('../model/model.js');

// URL Format:  mongodb://[IP_FOR_DB]:[PORT_FOR_DB]/[DB_NAME]
mongoose.connect('mongodb://localhost:27017/projectMaker')
  .then((data) => (console.log('mongo success!')))
  .catch((error) => (console.log(error)));

// Create a document
// Returns a promise
// TODO: Implement pagination.
const createProject = (projectData) => {
    return Project.create(projectData);
  };

// Read all documents
// Make queries promises with exec()
const getProjects = () => {
  return Project.find().exec();
};

// Update a document
const updateProject = (projectData) => {

  // Format the link to be based on the name.
  // EX:  name: 'Project Name', link: 'project-name'
  const linkLowerCase = projectData.name.toLowerCase().split(' ').join('-');
  console.log('Link', linkLowerCase)

  const filter = { '_id': projectData._id };

  const update = {
    name: projectData.name,
    link: `${linkLowerCase}`,
    client: projectData.client,
    client_url: projectData.client_url,
    date: projectData.date,
    short: projectData.short,
    info: projectData.info,
    tech: projectData.tech,
    photos: projectData.photos,
  };


  const options = { 'upsert': false };

  return Project.findOneAndUpdate(filter, update, options).exec();
}

// Delete a document
const deleteProject = (id) => {
  console.log('delete project', id)
  return Project.deleteOne({_id: id}).exec();
};



module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};

const mongoose = require('mongoose');
const Project = require('../model/model.js');

// URL Format:  mongodb://[IP_FOR_DB]:[PORT_FOR_DB]/[DB_NAME]
mongoose.connect('mongodb://localhost:27017/projectMaker')
  .then((data) => (console.log('mongo success!')))
  .catch((error) => (console.log(error)));

const getProjects = () => {
  return Project.find()
  .exec();
};

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

  const options = { 'upsert': true };

  return Project.findOneAndUpdate(filter, update, options).exec();
}

const createProject = (projectData) => {
  return Project.create(projectData);
};

module.exports = {
  getProjects,
  updateProject,
  createProject,
};

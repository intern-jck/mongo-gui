const mongoose = require('mongoose');
const Project = require('../model/model.js');

mongoose.connect('mongodb://localhost:27017/projects')
.then((data) => (console.log('mongo success!')))
.catch((error) => (console.log(error)));

const getProjects = () => {
  console.log('getting data')
  return Project.find()
  .exec();
};

const addProject = (projectData) => {
  console.log('adding project', projectData);

  const filter = { 'project_id': projectData.project_id };
  const update = {
    name: projectData.name,
    link: projectData.link,
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

module.exports = {
  getProjects,
  addProject,
};

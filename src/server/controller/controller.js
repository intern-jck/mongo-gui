const mongoose = require('mongoose');
const Project = require('../model/model.js');

mongoose.connect('mongodb://localhost:27017/projectMaker')
.then((data) => (console.log('success!')))
.catch((error) => (console.log(error)));

const getProjects = () => {
  console.log('getting data')
  return Project.find()
  .exec();
};

module.exports = {
  getProjects
};

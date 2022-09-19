const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProjectsSchema = new Schema({
  name: String,
  link: String,
  client: String,
  client_url: String,
  date: {
    start: String,
    end: String,
  },
  short: String,
  info: String,
  tech: [],
  photos: [],
});

const Project = mongoose.model('Projects', ProjectsSchema);
module.exports = Project;

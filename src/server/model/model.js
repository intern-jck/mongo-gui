const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProjectsSchema = new Schema({
  name: String,
  client: String,
  client_url: String,
  link: String,
  date: {
    start: Date,
    end: Date,
  },
  short: String,
  info: String,
  tech: [],
  photos: [],
});

const Project = mongoose.model('Projects', ProjectsSchema);
module.exports = Project;

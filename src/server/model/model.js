const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProjectSchema = new Schema({
  project_id: Number,
  name: String,
  link: String,
  client: String,
  client_url: String,
  date: {
    start_month: String,
    start_year: String,
    end_month: String,
    end_year: String,
  },
  short: String,
  info: String,
  tech: [],
  photos: [],
});

const Project = mongoose.model('Projects', ProjectSchema);
module.exports = Project;

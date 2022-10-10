const mongoose = require('mongoose');
const {Schema} = mongoose;

const DocumentSchema = new Schema({
  text_0: {type: String, default: ''},
  text_1: {type: String, default: ''},
  text_3: {type: String, default: ''},
  docDate: {type: Date, default: new Date()},
  tags: [],
  photos: [],
});

const Document = mongoose.model('Documents', DocumentSchema);
module.exports = Document;

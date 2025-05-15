const mongoose = require('mongoose');

const inspectorSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  contact: String
});

module.exports = mongoose.model('Inspector', inspectorSchema);

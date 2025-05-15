const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyAddress: String,
  reportFile: String,  // filename or URL
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', reportSchema);

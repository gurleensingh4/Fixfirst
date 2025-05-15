const mongoose = require('mongoose');

const InspectionSchema = new mongoose.Schema({
  propertyAddress: String,
  userName: String,
  userEmail: String,
  inspectorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inspector' },
  date: Date,
  reportUrl: String,
});

module.exports = mongoose.model('Inspection', InspectionSchema);

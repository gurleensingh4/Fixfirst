const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  propertyAddress: String,
  inspector: { type: mongoose.Schema.Types.ObjectId, ref: 'Inspector' },
  certificationDate: { type: Date, default: Date.now },
  notes: String
});

module.exports = mongoose.model('Certificate', certificateSchema);

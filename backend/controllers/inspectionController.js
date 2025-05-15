const Inspection = require('../models/Inspection');

// Book an inspection
exports.bookInspection = async (req, res) => {
  const { propertyAddress, userName, userEmail, inspectorId, date, reportUrl } = req.body;
  try {
    const newInspection = new Inspection({ propertyAddress, userName, userEmail, inspectorId, date, reportUrl });
    await newInspection.save();
    res.status(201).json(newInspection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all inspection bookings
exports.getInspections = async (req, res) => {
  try {
    const inspections = await Inspection.find().populate('inspectorId', 'name location');
    res.json(inspections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

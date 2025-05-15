const Inspector = require('../models/Inspector');

// Get all inspectors
exports.getInspectors = async (req, res) => {
  try {
    const inspectors = await Inspector.find();
    res.json(inspectors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new inspector
exports.addInspector = async (req, res) => {
  const { name, location, rating, contact, specialization } = req.body;
  try {
    const newInspector = new Inspector({ name, location, rating, contact, specialization });
    await newInspector.save();
    res.status(201).json(newInspector);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

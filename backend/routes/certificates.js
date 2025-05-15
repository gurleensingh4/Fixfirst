const express = require('express');
const Certificate = require('../models/Certificate');
const Inspector = require('../models/Inspector');
const router = express.Router();

router.get('/', async (req, res) => {
  const certs = await Certificate.find().populate('inspector');
  res.json(certs);
});

router.post('/', async (req, res) => {
  const { propertyAddress, inspectorId, notes } = req.body;
  try {
    const cert = new Certificate({
      propertyAddress,
      inspector: inspectorId,
      notes
    });
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

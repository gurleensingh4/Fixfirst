const express = require('express');
const multer = require('multer');
const Report = require('../models/Report');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Middleware to check JWT token
function auth(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Upload report
router.post('/', auth, upload.single('reportFile'), async (req, res) => {
  const { propertyAddress } = req.body;
  const file = req.file;
  if (!file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const report = new Report({
      user: req.userId,
      propertyAddress,
      reportFile: file.filename
    });
    await report.save();
    res.json({ message: 'Report uploaded', report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all reports for logged in user
router.get('/', auth, async (req, res) => {
  try {
    const reports = await Report.find({ user: req.userId });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

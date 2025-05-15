const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Get all unverified inspectors (admin only)
router.get('/inspectors/unverified', authMiddleware('admin'), async (req, res) => {
  try {
    const inspectors = await User.find({ role: 'inspector', isVerified: false });
    res.json(inspectors);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify an inspector (admin only)
router.post('/inspectors/verify/:id', authMiddleware('admin'), async (req, res) => {
  try {
    const inspector = await User.findById(req.params.id);
    if (!inspector || inspector.role !== 'inspector') {
      return res.status(404).json({ error: 'Inspector not found' });
    }
    inspector.isVerified = true;
    await inspector.save();
    res.json({ message: 'Inspector verified successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

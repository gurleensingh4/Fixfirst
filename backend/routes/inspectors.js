const express = require('express');
const Inspector = require('../models/Inspector');
const router = express.Router();

router.get('/', async (req, res) => {
  const inspectors = await Inspector.find();
  res.json(inspectors);
});

module.exports = router;

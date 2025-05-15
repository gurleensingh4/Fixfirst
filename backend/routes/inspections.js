const express = require('express');
const router = express.Router();
const { bookInspection, getInspections } = require('../controllers/inspectionController');

router.get('/', getInspections);
router.post('/', bookInspection);

module.exports = router;

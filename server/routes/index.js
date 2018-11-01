const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const geoController = require('../controllers/geographyController');
router.get('/history', historyController.data);
router.get('/geography', geoController.data);

module.exports = router;
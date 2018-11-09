const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const geoController = require('../controllers/geographyController');
const userController = require('../controllers/userController');

router.get('/history', historyController.data);
router.get('/geography', geoController.data);
router.put('/users', userController.user);
router.get('/users', userController.showUsers);
router.get('/dbusers', userController.dbUsers);

module.exports = router;
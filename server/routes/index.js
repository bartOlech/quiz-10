const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const geoController = require('../controllers/geographyController');
const userController = require('../controllers/userController');

router.get('/history', historyController.data);
router.get('/geography', geoController.data);
// add a user to the database
router.put('/users', userController.users); 

router.get('/dbusers', userController.dbUsers);
router.get('/', (req, res) => {
    res.send('hello Bro!!!')
});

module.exports = router;
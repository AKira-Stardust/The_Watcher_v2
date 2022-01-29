const express = require('express');
const router = express.Router();

const watchedController = require('../controllers/watchedController');

//GET INDEX
router.get('/', watchedController.watched_index);

module.exports = router;
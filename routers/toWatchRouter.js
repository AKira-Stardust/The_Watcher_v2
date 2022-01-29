const express = require('express');
const router = express.Router();

const toWatchController = require('../controllers/toWatchController');

//GET INDEX
router.get('/', toWatchController.toWatch_index);

module.exports = router;
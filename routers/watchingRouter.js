const express = require('express');
const router = express.Router();

const watchingController = require('../controllers/watchingController');

//GET INDEX
router.get('/', watchingController.watching_index);

module.exports = router;
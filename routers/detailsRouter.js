const express = require('express');
const router = express.Router();

const detailsController = require('../controllers/detailsController');

//GET SINGLE DRAMA DETAILS
router.get('/:id', detailsController.drama_details);

//DELETE SINGLE DRAMA DETAILS
router.delete('/:id', detailsController.drama_delete);

module.exports = router;
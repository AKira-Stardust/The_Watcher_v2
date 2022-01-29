const express = require('express');
const router = express.Router();
const multer = require("multer");

const allController = require('../controllers/allController');

//ADD NEW DRAMA - GET
router.get('/addNew', allController.all_add_get);

//UPDATE EXISTING DRAMA - GET
router.get('/updateDrama/:id', allController.all_update_get);


//Prework for processing image before upload
const upload = multer({
    // dest: 'images_multer'
});

//UPDATE EXISTING DRAMA - GET
router.post('/updateDrama/:id', upload.single("uploaded_image"), allController.all_update_post);

//ADD NEW DRAMA - POST
router.post('/', upload.single("uploaded_image"), allController.all_add_post);

//GET SINGLE DRAMA DETAILS
router.get('/', allController.all_details);

//GET IMAGE
router.get('/image/:id', allController.all_image);

//FIND DRAMA
router.get('/findDrama', allController.all_find_drama);
module.exports = router;
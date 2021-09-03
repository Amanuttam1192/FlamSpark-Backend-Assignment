const express = require('express');
const router  = express.Router();
const upload  = require('../upload');
const { processImage } = require('../controllers/process');
router.post('/process',upload.single('image'),processImage);
module.exports = router;
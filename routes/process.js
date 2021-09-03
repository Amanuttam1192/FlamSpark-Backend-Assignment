const express = require('express');
const router  = express.Router();
const path    = require('path');
const upload  = require('../upload');
router.post('/process',upload.single('image'),async (req, res) => {
    
    await res.send(req.file);
});
module.exports = router;
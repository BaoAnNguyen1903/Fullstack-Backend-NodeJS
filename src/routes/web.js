const express = require('express');
const {getHomepage, getBaoAn} = require('../controller/homeControler');
const router = express.Router();

// router.Method('route', handler)

router.get('/', getHomepage);
  
router.get('/baoan', getBaoAn);

module.exports = router;
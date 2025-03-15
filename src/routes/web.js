const express = require('express');
const {getHomepage, getBaoAn} = require('../controller/homeController');
const { getSample } = require('../controller/homeController');
const router = express.Router();

// router.Method('route', handler)

router.get('/', getHomepage);
  
router.get('/baoan', getBaoAn);

router.get('/sample', getSample);

module.exports = router;
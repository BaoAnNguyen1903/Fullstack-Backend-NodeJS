const express = require('express');
const {getHomepage, getBaoAn, postCreateUser, getSample, getCreatePage, getUpdatePage} = require('../controller/homeController');
const router = express.Router();

// router.Method('route', handler)

router.get('/', getHomepage);
  
router.get('/baoan', getBaoAn);

router.get('/sample', getSample);

router.post('/create-user', postCreateUser);

router.get('/create', getCreatePage);
router.get('/edit', getUpdatePage)

module.exports = router;
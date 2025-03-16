const express = require('express');
const {getHomepage, postDeleteUser, postHandleRemoveUser, postUpdateUser, getBaoAn, postCreateUser, getSample, getCreatePage, getUpdatePage} = require('../controller/homeController');
const router = express.Router();

// router.Method('route', handler)

router.get('/', getHomepage);
  
router.get('/baoan', getBaoAn);

router.get('/sample', getSample);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage)
router.post('/delete-user', postHandleRemoveUser);

module.exports = router;
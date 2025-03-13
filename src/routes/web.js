const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! and bao an dep trai')
})
  
router.get('/baoan', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;
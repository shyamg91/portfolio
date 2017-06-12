const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/work', (req, res) => {
  res.render('work');
})

module.exports = router;

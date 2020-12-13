const router = require('express').Router();
//this file goes in the general controllers file as it is NOT part ofthe api directly
router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
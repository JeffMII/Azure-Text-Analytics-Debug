// import express = require('express');
const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', (req : any, res : any, next : any) => {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;

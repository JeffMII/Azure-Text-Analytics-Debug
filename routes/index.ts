import express, { NextFunction, Request, Response } from 'express';
// import express = require('express');
// const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req : Request, res : Response, next : NextFunction) => {
  res.render('index', { title: 'Express' });
});

// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

export = router;

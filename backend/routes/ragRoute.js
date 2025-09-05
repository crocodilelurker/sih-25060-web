const express = require('express');
const { getRag } = require('../controller/ragController.js');
const router= express.Router();

router.post("/send-query",getRag)

module.exports= router
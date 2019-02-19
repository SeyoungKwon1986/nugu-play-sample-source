const express = require('express');
const npkRequest = require('../nugu');
const { json } = require('../http');
const router = express.Router();

router.post('/', json(npkRequest));

module.exports = router;

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/create', movieController.createMovie);

module.exports = router;

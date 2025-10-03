var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);

// get about page
router.get('/', mainController.about);

// get contact page
router.get('/', mainController.contact);

// get prodi page
router.get('/', mainController.prodi);

module.exports = router;

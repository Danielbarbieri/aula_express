var express = require('express');
var router = express.Router();
var ContatoController = require('../controller/ContatoController');
var HomeController = require("../controller/HomeController");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', HomeController.index);
router.get('/contato', ContatoController.index);

module.exports = router;

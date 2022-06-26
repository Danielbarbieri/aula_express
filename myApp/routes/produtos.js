var express = require('express');
var router = express.Router();

/* GET produtos listing. */
router.get('/', function(req, res, next) {
    res.render('produtos', { title: 'Express' });
});

module.exports = router;

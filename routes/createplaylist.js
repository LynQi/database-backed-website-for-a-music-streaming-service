var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    res.render('createplaylist', {uid:req.params.id});
});

module.exports = router;
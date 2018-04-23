var express = require('express');
var router = express.Router();
var models  = require('../models');
var user = models.user;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    user.findOne({
        where:{
            uid: req.params.id
        }
    }).then(function(result){
        res.render('profile', {result: result});
    });
});

router.get('/:id/change', function(req, res, next){
    res.render('change', {uid:req.params.id});
});

module.exports = router;
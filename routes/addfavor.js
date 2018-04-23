var express = require('express');
var router = express.Router();
var models  = require('../models');
var favor = models.favor;

router.get('/', function(req, res, next){
    console.log( req.query.aid,
         req.query.uid);
    favor.findOrCreate({
        where:{aid: req.query.aid,
        uid: req.query.uid}
    }).then(function(result){
        req.flash("success","You have liked an artist!");
    }).catch(function(err){
        // console.log(err);
    });
});


module.exports = router;
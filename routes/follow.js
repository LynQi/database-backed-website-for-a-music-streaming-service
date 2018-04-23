var express = require('express');
var router = express.Router();
var models  = require('../models');
var follow = models.follow;

router.get("/:id", function(req, res, next){
    follow.findOrCreate({
        where:{uid: req.query.uid,
        fuid: req.params.id}
    }).then(function(result){
        req.flash("success","You have followed a new friend!");
        res.redirect("/users/"+req.query.uid);
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = router;

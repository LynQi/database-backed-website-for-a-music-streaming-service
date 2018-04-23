var express = require('express');
var router = express.Router();
var models  = require('../models');
var p_t = models.p_t;

router.get('/:id', function(req, res, next){
    p_t.findOrCreate({
        where:{pid: req.params.id,
               tid: req.query.tid}
    }).then(function(result){
        req.flash("success","You have added new music!");
        res.redirect("/users/" + req.query.uid);
    }).catch(function(err){
        console.log(err);
    });
});


module.exports = router;
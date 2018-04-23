var express = require('express');
var router = express.Router();
var models  = require('../models');
var follow = models.follow;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    follow.findAll({
        where:{uid:req.params.id}
    }).then(function(result){
        if(result.length){
            res.render('friendlist', {result: result, uid: req.params.id});
        }
        else{
            req.flash("error","Sorry, there is no result.");
            res.redirect("/users/"+req.params.id);
        }
    });
});

module.exports = router;
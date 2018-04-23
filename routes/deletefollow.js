var express = require('express');
var router = express.Router();
var models  = require('../models');
var follow = models.follow;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    follow.destroy({
        where:{fuid:req.params.id,
            uid:req.query.uid}
    }).then(function(result){
        req.flash("success","You have deleted a follow.");
        res.redirect("/users/"+req.query.uid);
    });
});

module.exports = router;
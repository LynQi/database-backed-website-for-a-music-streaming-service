var express = require('express');
var router = express.Router();
var models  = require('../models');
var favor = models.favor;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    favor.destroy({
        where:{aid:req.params.id,
               uid:req.query.uid}
    }).then(function(result){
        req.flash("success","You have disliked an artist.");
        res.redirect("/users/"+req.query.uid);
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var models  = require('../models');
var playlist = models.playlist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    playlist.findAll({
        where:{uid:req.params.id,
               see:1}
    }).then(function(result){
        if(result.length){
            res.render('friendplaylist', {result: result, uid: req.query.uid});
        }
        else{
            req.flash("error","Sorry, there is no result.");
            res.redirect("/users/"+req.query.uid);
        }
    });
});

module.exports = router;
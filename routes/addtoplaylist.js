var express = require('express');
var router = express.Router();
var models  = require('../models');
var playlist = models.playlist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function(req, res, next){
    playlist.findAll({
        where:{uid:req.query.uid}
    }).then(function(result){
        if(result.length){
            res.render('addtoplaylist', {result: result, tid: req.query.tid, uid: req.query.uid});
        }
        else{
            req.flash("error","Sorry, you do not have playlist.");
            res.redirect("/users/"+req.query.uid);
        }
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var models  = require('../models');
var playlist = models.playlist;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    playlist.destroy({
        where:{pid:req.params.id}
    }).then(function(result){
        req.flash("success","You have deleted a playlist.");
        res.redirect("/users/"+req.query.uid);
    });
});

module.exports = router;
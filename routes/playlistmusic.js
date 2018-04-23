var express = require('express');
var router = express.Router();
var models  = require('../models');
var playlist = models.playlist;
var p_t = models.p_t;
var track = models.track;
var artist = models.artist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    track.hasMany(p_t,{foreignKey: 'tid'});
    p_t.belongsTo(track,{foreignKey: 'tid'});

    console.log(req.params.id);
    p_t.findAll({
        include:[track], where:{pid:req.params.id},
        row: true,
        require:true
    }).then(function(result){
        if(result.length){
            res.render('playlistmusic', {result: result, uid: req.query.uid});
        }
        else{
            req.flash("error","Sorry, there is no result.");
            res.redirect("/users/"+req.query.uid);
        }
    });
});

module.exports = router;
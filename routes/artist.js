var express = require('express');
var router = express.Router();
var models  = require('../models');
var track = models.track;
var artist = models.artist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/:id', function(req, res, next){
    artist.hasMany(track,{foreignKey: 'aid'});
    track.belongsTo(artist,{foreignKey: 'aid'});

    track.findAll({
        include:[artist], where:{aid:req.params.id},
        row: true,
        require:true
    }).then(function(result){
        // console.log(result);
        res.render('music', {result: result, uid: req.query.uid});
    });
});

module.exports = router;
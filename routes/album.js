var express = require('express');
var router = express.Router();
var models  = require('../models');
var track = models.track;
var a_t = models.a_t;
var artist = models.artist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/:id', function(req, res, next){
    track.hasMany(a_t,{foreignKey: 'tid'});
    a_t.belongsTo(track,{foreignKey: 'tid'});
    a_t.findAll({
        include:[track], where:{alid:req.params.id},
        row: true,
        require:true,
        limit:10
    }).then(function(result){
        res.render('a_t_music', {result: result, uid: req.query.uid});
    });
});



module.exports = router;

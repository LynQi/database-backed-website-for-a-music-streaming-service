var express = require('express');
var router = express.Router();
var models  = require('../models');
var favor = models.favor;
var artist = models.artist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    artist.hasMany(favor,{foreignKey: 'aid'});
    favor.belongsTo(artist,{foreignKey: 'aid'});

    favor.findAll({
        where:{uid:req.params.id},
        include:[artist],
        row: true,
        require:true
    }).then(function(result){
        if(result.length){
            res.render('favor', {result: result, uid: req.params.id});
        }
        else{
            req.flash("error","Sorry, there is no result.");
            res.redirect("/users/"+req.params.id);
        }
    });
});

module.exports = router;
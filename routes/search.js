var express = require('express');
var router = express.Router();
var models  = require('../models');
var album = models.album;
var track = models.track;
var artist = models.artist;
var follow = models.follow;
var user = models.user;

router.get('/', function(req, res, next){
    if(req.query.select == 'music'){
        artist.hasMany(track, {foreignKey:'aid'});
        track.belongsTo(artist,{foreignKey: 'aid'});
        track.findAll({
            include:[artist], where:{trtitle:req.query.search},
            row: true,
            require:true
        }).then(function (result) {
            if(result.length) {
                // console.log(result);
                res.render('music', {result: result, uid: req.query.uid});
            }
            else{
                req.flash("error","Sorry, there is no result.");
                res.redirect("/users/"+req.query.uid);
            }
        })
    };
    if(req.query.select == 'album'){
        album.findAll({
            where:{altitle: req.query.search}
        }).then(function(result){
            if(result.length) {
                res.render('album', {result: result, uid: req.query.uid});
            }
            else{
                req.flash("error","Sorry, there is no result.");
                res.redirect("/users/"+req.query.uid);
            }
        })
    };
    if(req.query.select == 'artist'){
        artist.findAll({
            where:{aname: req.query.search}
        }).then(function(result){
            if(result.length) {
                res.render('artist', {result: result, uid: req.query.uid});
            }
            else{
                req.flash("error","Sorry, there is no result.");
                res.redirect("/users/"+req.query.uid);
            }
        })
    };
    if(req.query.select == 'friend'){
        user.findAll({
            where:{uid: req.query.search}
        }).then(function(result){
            if(result.length) {
                res.render('friend', {result: result, uid: req.query.uid});
            }
            else{
                req.flash("error","Sorry,there is no result.");
                res.redirect("/users/"+req.query.uid);
            }
        })
    };
});

module.exports = router;
var express = require('express');
var router = express.Router();
var models  = require('../models');
var playlist = models.playlist;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function(req, res, next){
    if(req.query.share == 1) {
        playlist.count().then(function(t){
            if(Number(t) == 0){
                playlist.create({
                    pid:1,
                    pltitle: req.query.playlistname,
                    uid: req.query.uid,
                    see: 1
                }).then(function (result) {
                    req.flash("success", "You have created a new playlist!");
                    res.redirect("/users/" + req.query.uid);
                }).catch(function (err) {
                    res.redirect("/users/"+req.query.uid);
                });
            }
            else {
                playlist.max('pid').then(function (temp) {
                    playlist.create({
                        pid: (Number(temp) + 1),
                        pltitle: req.query.playlistname,
                        uid: req.query.uid,
                        see: 1
                    }).then(function (result) {
                        req.flash("success", "You have created a new playlist!");
                        res.redirect("/users/" + req.query.uid)
                    })
                }).catch(function (err) {
                    console.log(err);
                    res.redirect("/users/" + req.query.uid);
                });
            }
        })
    }
    else{
        playlist.count().then(function(t){
            if(Number(t) == 0){
                playlist.create({
                    pid:1,
                    pltitle: req.query.playlistname,
                    uid: req.query.uid,
                    see:0
                }).then(function (result) {
                    req.flash("success", "You have created a new playlist!");
                    res.redirect("/users/" + req.query.uid);
                }).catch(function (err) {
                    res.redirect("/users/"+req.query.uid);
                });
            }
            else {
                playlist.max('pid').then(function (temp) {
                    playlist.create({
                        pid: (Number(temp) + 1),
                        pltitle: req.query.playlistname,
                        uid: req.query.uid,
                        see: 0
                    }).then(function (result) {
                        req.flash("success", "You have created a new playlist!");
                        res.redirect("/users/" + req.query.uid)
                    })
                }).catch(function (err) {
                    console.log(err);
                    res.redirect("/users/" + req.query.uid);
                });
            }
        })
    }
});

router.get('/:id', function(req, res, next){
    res.render('createplaylist', {uid:req.params.id});
});

module.exports = router;
var express = require('express');
var router = express.Router();
var models  = require('../models');
var rating = models.rating;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function(req, res, next){
    if(req.query.rate == '5') {
        rating.upsert({
            tid: req.query.tid,
            uid: req.query.uid,
            rate: 5
        }).then(function (result) {
            req.flash("success", "thank you for rating!");
            // res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid});

        }).catch(function (err) {
            console.log(err);
        });
    }
    if(req.query.rate == '4') {
        rating.upsert({
            tid: req.query.tid,
            uid: req.query.uid,
            rate: 4
        }).then(function (result) {
            req.flash("success", "thank you for rating!");
            // res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid});
        }).catch(function (err) {
            console.log(err);
        });
    }
    if(req.query.rate == '3') {
        rating.upsert({
            tid: req.query.tid,
            uid: req.query.uid,
            rate: 3
        }).then(function (result) {
            req.flash("success", "thank you for rating!");
            // res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid});
        }).catch(function (err) {
            console.log(err);
        });
    }
    if(req.query.rate == '2') {
        rating.upsert({
            tid: req.query.tid,
            uid: req.query.uid,
            rate: 2
        }).then(function (result) {
            req.flash("success", "thank you for rating!");
            // res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid});
        }).catch(function (err) {
            console.log(err);
        });
    }
    if(req.query.rate == '1') {
        rating.upsert({
            tid: req.query.tid,
            uid: req.query.uid,
            rate: 1
        }).then(function (result) {
            req.flash("success", "thank you for rating!");
            // res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid});
        }).catch(function (err) {
            console.log(err);
        });
    }
});

module.exports = router;
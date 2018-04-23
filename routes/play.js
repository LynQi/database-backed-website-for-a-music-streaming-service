var express = require('express');
var router = express.Router();
var models  = require('../models');
var record = models.record;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    record.create({
        tid: req.params.id,
        uid: req.query.uid
    }).then(function (result) {
        res.render('play', {track: req.params.id, uid: req.query.uid, aid:req.query.aid})
    }).catch(function (err) {
        console.log(err);
        // res.redirect("/users/"+req.query.uid);
    });

});

module.exports = router;
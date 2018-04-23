var express = require('express');
var router = express.Router();
var models  = require('../models');
var user = models.user;
const crypto = require("crypto");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/signin", function(req, res, next){
  // res.send(req.query);
    var password = req.query.password;
    var md5 = crypto.createHash("md5");
    var newPas = md5.update(password).digest("hex");
    user.findOne({
        where: {uid: req.query.username,
                 password: newPas
                // password: req.query.password
                }
    }).then(function(result){
      // res.send(result);
        if (result) {
            res.redirect("users/"+result.uid);
        }
        else{
            res.render('index');
        }
    });
});

router.get("/signup", function(req, res, next){
    res.render('signup');
});

router.post("/signup", function(req, res, next){
    var password = req.body.password;
    var md5 = crypto.createHash("md5");
    var newPas = md5.update(password).digest("hex");

    user.create({
        uid: req.body.username,
        uname: req.body.name,
        password: newPas,
        email: req.body.email,
        city: req.body.city
    }).then(function(result){
       res.redirect("users/"+result.uid);
    }).catch(function(err){
       req.flash("success","Sorry, username is already exist.");
       res.redirect("/");
    });
});

module.exports = router;

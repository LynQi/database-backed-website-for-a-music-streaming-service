var express = require('express');
var router = express.Router();
var models  = require('../models');
var user = models.user;
const crypto = require("crypto");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', function(req, res, next){
    var password = req.body.newpassword;
    var md5 = crypto.createHash("md5");
    var newPas = md5.update(password).digest("hex");
    user.update({
        uname: req.body.newname,
        password: newPas,
        email: req.body.newemail,
        city: req.body.newcity},
        {where:{uid:req.body.uid}
    }).then(function(result){
        req.flash("success","You have changed your profile.");
        res.redirect("/users/"+req.body.uid);
    }).catch(function(err){
        console.log(err);
    });
});

module.exports = router;
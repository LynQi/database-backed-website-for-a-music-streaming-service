var express = require('express');
var router = express.Router();
var models  = require('../models');
var p_t = models.p_t;


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){
    p_t.destroy({
        where:{pid:req.query.pid,
               tid:req.params.id}
    }).then(function(result){
        req.flash("success","You have deleted a music.");
        res.redirect("/playlist/"+req.query.uid);
    });
});

module.exports = router;
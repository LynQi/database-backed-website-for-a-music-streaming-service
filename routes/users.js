var express = require('express');
var router = express.Router();
var models  = require('../models');
var album = models.album;
var user = models.user;
var favor = models.favor;
var artist = models.artist;

var follow = models.follow;
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function(req, res, next){


    // track.belongsToMany(favor, {through: 'favtrack',foreignKey: 'aid'});
    // favor.belongsToMany(track, {through: 'favtrack',foreignKey: 'aid'});
    // track.hasMany (favor, { joinTableName: 'track_favor_bridge' });
    // favor.hasMany (track, { joinTableName: 'track_favor_bridge' });
    //
    // sequelize.sync ();
    // artist.belongsToMany(user, { through: {model: models.favor},foreignKey:'aid'});
    // user.belongsToMany(artist, { through: {model: models.favor},foreignKey:'uid'});
    artist.hasMany(favor,{foreignKey: 'aid'});
    favor.belongsTo(artist,{foreignKey: 'aid'});
    var flw = follow.findAll({
        where:{
            uid: req.params.id
        }
    })
  var alb = album.findAll({
      order: [['aldate', 'DESC']],
      limit: 5
  });
  var prof = user.findOne({
      where:{
          uid: req.params.id
      }
  });
  // var favorsong= favor.findAll({
  //     include: [artist],
  //     where: {uid: req.params.id}
  //
  // });
  //  var favorsong = favor.findAll({
  //       where:{uid:req.params.id},
  //       include:[artist],
  //       row: true,
  //       require:true,
  //       limit: 5
  //   });
    Promise.all([alb, prof, flw]).then(function (results) {
        // console.log(results[2]);
        res.render("user", {
                                albres: results[0],
                                prof: results[1],
                                flw: results[2],
                                uid: req.params.id
                            });

    }).catch(function(err){
        console.log('failed'+err);
    });
});

router.get('/:id/change', function(req, res, next){
    res.render('change', {uid:req.params.id});
});

module.exports = router;
////////////////////////
// var express = require('express');
// var router = express.Router();
// var models  = require('../models');
// var album = models.album;
//
// /* GET users listing. */
// // router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });
//
// router.get('/:id', function(req, res, next){
//     album.findAll({
//         order: [['aldate', 'DESC']],
//         limit: 5
//     }).then(function(result){
//         res.render('user', {result: result, uid: req.params.id});
//     });
// });
//
// module.exports = router;
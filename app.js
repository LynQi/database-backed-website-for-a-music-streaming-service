var express = require('express');
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    methodOverride = require("method-override"),
    session = require("express-session"),
    flash = require("connect-flash"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    app = express();

var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var album = require('./routes/album');
var play = require('./routes/play');
var profile = require('./routes/profile');
var change = require('./routes/change');
var artist = require('./routes/artist');
var follow = require('./routes/follow');
var playlist = require('./routes/playlist');
var favor = require('./routes/favor');
var deleteartist = require('./routes/deleteartist');
var friend = require('./routes/friend');
var see = require('./routes/see');
var deletefollow = require('./routes/deletefollow');
var friendmusic = require('./routes/friendmusic');
var deleteplaylist = require('./routes/deleteplaylist');
var createplaylist = require('./routes/createplaylist');
var addplaylist = require('./routes/addplaylist');
var playlistmusic = require('./routes/playlistmusic');
var deletemusic = require('./routes/deletemusic');
var rating = require('./routes/rating');
var addfavor = require('./routes/addfavor');
var addtoplaylist = require('./routes/addtoplaylist');
var addmusic = require('./routes/addmusic');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(require("express-session")({
    secret: "",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(function(req, res, next){
    // res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/search', search);
app.use('/album', album);
app.use('/play', play);
app.use('/profile', profile);
app.use('/change', change);
app.use('/artist', artist);
app.use('/follow', follow);
app.use('/playlist', playlist);
app.use('/favor', favor);
app.use('/deleteartist', deleteartist);
app.use('/friend', friend);
app.use('/see', see);
app.use('/deletefollow', deletefollow);
app.use('/friendmusic', friendmusic);
app.use('/deleteplaylist', deleteplaylist);
app.use('/createplaylist', createplaylist);
app.use('/addplaylist', addplaylist);
app.use('/playlistmusic', playlistmusic);
app.use('/deletemusic', deletemusic);
app.use('/rating', rating);
app.use('/addfavor', addfavor);
app.use('/addtoplaylist', addtoplaylist);
app.use('/addmusic', addmusic);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

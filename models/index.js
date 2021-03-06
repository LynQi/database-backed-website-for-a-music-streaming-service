'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if(process.env.CLEARDB_DATABASE_URL){
    var sequelize = connect(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, process.env.HOST);
} else {
    // console.log(config);
    var sequelize = connect(config.database, config.username, config.password, config.host);
}

function connect(db, name, pw, hs){
    const sequelize = new Sequelize(db, name, pw, {
        host: hs,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    });
    return sequelize;
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

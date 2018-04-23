/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('track', {
    tid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    trtitle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    aid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'artist',
        key: 'aid'
      }
    },
    genre: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'track'
  });
};

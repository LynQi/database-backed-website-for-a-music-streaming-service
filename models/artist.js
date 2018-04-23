/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist', {
    aid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    aname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'artist'
  });
};

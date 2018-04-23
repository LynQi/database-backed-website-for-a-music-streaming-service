/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('album', {
    alid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    altitle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    aldate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'album'
  });
};

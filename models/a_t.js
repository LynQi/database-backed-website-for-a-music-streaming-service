/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('a_t', {
    alid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'album',
        key: 'alid'
      }
    },
    tid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'track',
        key: 'tid'
      }
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'a_t'
  });
};

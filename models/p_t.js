/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p_t', {
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'playlist',
        key: 'pid'
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
    }
  }, {
    tableName: 'p_t'
  });
};

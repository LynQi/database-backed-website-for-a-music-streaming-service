/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rating', {
    tid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'track',
        key: 'tid'
      }
    },
    uid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    rate: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    ratetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'rating'
  });
};

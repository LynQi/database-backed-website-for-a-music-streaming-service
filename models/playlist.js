/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('playlist', {
    pid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    pltitle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pldate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    uid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    see: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'playlist'
  });
};

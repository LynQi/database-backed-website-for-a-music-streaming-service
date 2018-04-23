/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favor', {
    aid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'artist',
        key: 'aid'
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
    liketime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'favor'
  });
};

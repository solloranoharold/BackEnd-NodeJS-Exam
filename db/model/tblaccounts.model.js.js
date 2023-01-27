const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {}
  Accounts.init(
    {
      user_id: DataTypes.INTEGER,
      user_level: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Accounts',
      tableName: 'tbl_accounts',
      timestamps: true
    }
  );
  return Accounts;
};






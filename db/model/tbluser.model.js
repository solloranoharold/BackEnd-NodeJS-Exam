const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init(
    {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    UserLevel: DataTypes.STRING,
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Address: DataTypes.STRING,
      PostCode: DataTypes.STRING,
      ContactNo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'tbl_users',
      timestamps: true
    }
  );
  return Users;
};






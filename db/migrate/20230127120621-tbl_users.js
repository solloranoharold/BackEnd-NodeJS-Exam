'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('tbl_users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      Username:{ type: Sequelize.STRING },
      Password : { type: Sequelize.STRING },
      UserLevel: { type: Sequelize.STRING },
      FirstName: { type: Sequelize.STRING },
      LastName: { type: Sequelize.STRING },
      Address: { type: Sequelize.STRING },
      PostCode: { type: Sequelize.STRING },
      ContactNo: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tbl_users');
  }
};

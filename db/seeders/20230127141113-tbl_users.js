'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('tbl_users', [{
        Username : "admin",
        Password : "21232f297a57a5a743894a0e4a801fc3",
        UserLevel : "Administrator",
        FirstName: 'John Doe',
        LastName: "Doe",
        Address: "Gentri Cavite",
        PostCode : "4107",
        ContactNo : "12345678",
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

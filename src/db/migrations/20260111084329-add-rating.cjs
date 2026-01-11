module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      ADD COLUMN rating DECIMAL(2,1) DEFAULT NULL,
      ADD COLUMN rating_count INT DEFAULT NULL`);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN rating,
      DROP COLUMN rating_count`);
  },
};

const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedMovies = require('./movieData');

const seedDatabase = async () => {
  await sequelize.syn({ force: true });
  await seedUsers();
  await seedMovies();

  process.exit(0);
};

seedDatabase();
const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedMovies = require('./movieData');
const seedReviews = require('./reviewData');
const seedGenre = require('./Genre')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedMovies();
  await seedReviews();
  await seedGenre();

  process.exit(0);
};

seedDatabase();
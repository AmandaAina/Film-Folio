const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Movie.hasMany(Review, {
    foreignKey: 'movieId',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'userId',
});

Review.belongsTo(Movie, {
    foreignKey: 'movieId',
});

module.exports = { User, Movie, Review };
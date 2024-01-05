const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');
const Genre = require('./Genre');

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Movie.hasMany(Review, {
    foreignKey: 'movieId',
    onDelete: 'CASCADE'
});

Movie.hasMany(Genre, {
    foreignKey: 'movieId',
})

Genre.hasMany(Movie, {
    foreignKey: 'movieId',
})

Review.belongsTo(User, {
    foreignKey: 'userId',
});

Review.belongsTo(Movie, {
    foreignKey: 'movieId',
});

module.exports = { User, Movie, Review, Genre };
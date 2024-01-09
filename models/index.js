const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');
const Genre = require('./Genre');

Movie.hasMany(Review, {
    foreignKey: 'movieId'
});

Review.belongsTo(Movie, {
    foreignKey: 'movieId',
});

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Movie.hasOne(Genre, {
    foreignKey: 'movieId',
})

Genre.belongsTo(Movie, {
    foreignKey: 'movieId',
})

module.exports = { User, Movie, Review, Genre };
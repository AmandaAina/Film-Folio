const { Genre } = require('../models');

const genreData = [
    {
        "genre": "Action"
    },
    {
        "genre": "Comedy"
    }, {
        "genre": "Drama"
    }, {
        "genre": "Horror"
    }, {
        "genre": "Romance"
    }, {
        "genre": "Thriller"
    }, {
        "genre": "Sci-Fi"
    }
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;



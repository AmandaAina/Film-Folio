const { Genre } = require('../models');

const genreData = [
    {
        name: "Action",
    },
    {
        name: "Comedy",
    }, 
    {
        name: "Drama",
    }, 
    {
        name: "Horror",
    }, 
    {
        name: "Romance",
    }, 
    {
        name: "Thriller",
    }, 
    {
        name: "Sci-Fi",
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;



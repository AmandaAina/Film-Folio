const { Review } = require('../models');

const reviewData = [
    {
        "reviewText": "The Shawshank Redemption is a classic! Absolutely must see!",
        "userId": 1,
        "movieId": 6,
    },
    {
        "reviewText": "Arnie! YEAH BOI!",
        "userId": 2,
        "movieId": 48,
    },
    {
        "reviewText": "I liked the T-Rex the most out of all of the dinosaurs.",
        "userId": 3,
        "movieId": 47,
    }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
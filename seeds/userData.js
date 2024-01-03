const { User } = require('../models/User');

const userData = [
    {
        "name": "Anthony",
        "password": "password"
    },
    {
        "name": "Kassandra",
        "password": "password"
    },
    {
        "name": "Kandace",
        "password": "password"
    },
    {
        "name": "Noah",
        "password": "password"
    },
    {
        "name": "Amanda",
        "password": "password"
    },
    {
        "name": "Gregory",
        "password": "password"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;
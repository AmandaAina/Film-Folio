const sequelize = require('../config/connection');
const { User, Movie , Review } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const reviewData = require('./reviewData.json');
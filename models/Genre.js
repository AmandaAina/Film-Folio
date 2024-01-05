const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        movieId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
    }
);

module.exports = Genre;
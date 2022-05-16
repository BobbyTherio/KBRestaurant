const Sequelize = require('sequelize');
const config = require('./../config');

const Food = config.define('Foods', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    ingredients: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {timestamps: false});

module.exports = Food;
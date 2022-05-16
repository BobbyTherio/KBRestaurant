const Sequelize = require('sequelize');
const config = require('./../config');

const Drink = config.define('Drinks', {
    drink_id: {
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
}, {timestamps: false});

module.exports = Drink;
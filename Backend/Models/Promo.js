const Sequelize = require('sequelize');
const config = require('./../config');

const Promo = config.define('promos', {
    promo_id: {
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
    start_date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    end_date: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Promo;
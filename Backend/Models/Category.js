const Sequelize = require('sequelize');
const config = require('./../config');

const Category = config.define('Categories', {
    category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Category;
const Sequelize = require('sequelize');
const config = new Sequelize("kbrestaurant", "bobby", "password", {dialect: 'mysql'});

module.exports = config;

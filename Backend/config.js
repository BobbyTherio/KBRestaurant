const Sequelize = require('sequelize');
const config = new Sequelize("kbrestaurant", "root", "password", {dialect: 'mysql'});

module.exports = config;

//test

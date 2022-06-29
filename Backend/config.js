const Sequelize = require('sequelize');
const config = new Sequelize("kbrestaurant", "username", "password", {
    host: '255.255.255.255',
    dialect: 'mysql'});

module.exports = config;

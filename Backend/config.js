const Sequelize = require('sequelize');
const config = new Sequelize("kbrestaurant", "kevin", "Myz'2S|V5dP$/8=T", {
    host: '34.83.241.31',
    dialect: 'mysql'});

module.exports = config;



const Sequelize = require('sequelize');

const config = new Sequelize('kbrestaurant', 'bobby', '=o@i<Z-x1)ox#r$+', {
    host: '34.83.241.31',
    dialect: 'mysql',
});

module.exports = config;
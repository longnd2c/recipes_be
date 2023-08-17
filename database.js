const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require", {
    dialectModule: require('pg')
  });

module.exports = sequelize
const Sequelize = require('sequelize');
const elephant = require('../internal/databaseInternals');
const User = require('./userTable');

const sequelize = new Sequelize(elephant.uri);

module.exports = sequelize;

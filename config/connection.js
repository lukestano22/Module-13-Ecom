const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is available (e.g., for production environment)
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If JAWSDB_URL is not available (e.g., for development environment)
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, 'password', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;


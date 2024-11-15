const Sequelize = require('sequelize');
require('dotenv').config();

// Add console logs for debugging
console.log('Attempting database connection...');
console.log('Database Name:', process.env.DB_NAME);
console.log('Database User:', process.env.DB_USER);
// Don't log the actual password for security reasons

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    // Add these options for better error reporting
    logging: console.log,
    dialectOptions: {
      connectTimeout: 60000
    },
  }
);

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;

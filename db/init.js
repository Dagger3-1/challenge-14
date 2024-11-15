const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const init = async () => {
  try {
    // Sync all models with database
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
};

init(); 
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('\n----- USERS SEEDED -----\n');

    const posts = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
    console.log('\n----- POSTS SEEDED -----\n');

    const comments = await Comment.bulkCreate(commentData, {
      returning: true,
    });
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

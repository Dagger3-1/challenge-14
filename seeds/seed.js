const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    // Clear existing data
    await sequelize.sync({ force: true });

    // Create users first
    const users = await User.bulkCreate(userData, {
      individualHooks: true, // This ensures passwords are hashed
      returning: true,
    });

    // Create blog posts
    const posts = await Post.bulkCreate(
      postData.map((post) => ({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      }))
    );

    // Create comments
    await Comment.bulkCreate(
      commentData.map((comment) => ({
        ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        post_id: posts[Math.floor(Math.random() * posts.length)].id,
      }))
    );

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

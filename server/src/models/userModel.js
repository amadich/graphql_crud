import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

// Define User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
User.sync()
  .then(() => console.log('User model synced with the database.'))
  .catch((error) => console.error('Error syncing User model:', error));

export default User;

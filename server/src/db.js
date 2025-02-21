import { Sequelize } from 'sequelize';

// Setup PostgreSQL connection
const sequelize = new Sequelize('postgres://root:root@localhost:5432/backpack', {
  dialect: 'postgres',
  logging: false,  // Disable SQL logging (optional)
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

export default sequelize;

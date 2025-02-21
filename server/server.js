import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import sequelize from './src/db.js';
import { schema } from './src/graphql/schema.js';

dotenv.config();

// Initialize the Apollo Server
const server = new ApolloServer({
  schema,
});

// Connect to PostgreSQL and start the server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Authenticate the database connection
    console.log('PostgreSQL connection established successfully!');

    const PORT = process.env.PORT || 5000;

    server.listen(PORT).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

startServer(); // Call the function to start the server

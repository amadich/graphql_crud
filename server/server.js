import dotenv from 'dotenv';
import { ApolloServer } from "apollo-server";
import { schema } from "./src/graphql/schema.js";
import { connectDB } from "./src/db.js";

dotenv.config();

const server = new ApolloServer({
   schema,
});

// Connect to the database
connectDB();

// PORT
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT).then(({ url }) => {
   console.log(`🚀 Server ready at ${url}`);
});
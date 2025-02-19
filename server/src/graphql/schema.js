import { makeExecutableSchema } from '@graphql-tools/schema';
import { userTypeDefs } from "./typeDefs/userTypeDefs.js"
import { userResolver } from "./resolvers/userResolver.js"

export const schema = makeExecutableSchema({
   typeDefs: [userTypeDefs],
   resolvers: [userResolver],
});
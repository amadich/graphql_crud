import { makeExecutableSchema } from '@graphql-tools/schema';
import { userTypeDefs } from "./typeDefs/userTypeDefs.js"
import { userResolver } from "./resolvers/userResolver.js"

import { taskTypeDefs } from './typeDefs/taskTypeDefs.js';
import { taskResolver } from './resolvers/taskResolver.js';

export const schema = makeExecutableSchema({
   typeDefs: [userTypeDefs , taskTypeDefs],
   resolvers: [userResolver , taskResolver],
});
import { UserService } from '../../services/userService.js';

export const userResolver = {
  Query: {
    getAllUsers: async () => {
      return await UserService.getAllUsers();
    },
    getUserById: async (_, { id }) => {
      return await UserService.getUserById(id);
    },
  },

  Mutation: {
    createUser: async (_, { registerInput }) => {
      const { username, email, password } = registerInput;
      return await UserService.createUser(username, email, password);
    },
  },
};

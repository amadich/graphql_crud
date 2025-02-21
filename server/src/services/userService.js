import User from '../models/userModel.js';

export class UserService {
  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id) {
    return await User.findByPk(id);
  }

  static async createUser(username, email, password) {
    return await User.create({
      username,
      email,
      password,
    });
  }
}

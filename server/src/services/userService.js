import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserService = {
  getAllUsers: async () => {
    return await User.find(); 
  },

  getUserById: async (id) => {
    return await User.findById(id);
  },

  createUser: async (username, email, password) => {

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({ username, email, password: passwordHash });
    await newUser.save(); // Save the user to the database

    const payload = {
      user: {
        id: newUser.id,
        username : newUser.username,
        email: newUser.email,
      },
    }

    // Generate a token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
    console.log(process.env.JWT_SECRET);
    

    // return {
    //   user: { 
    //     _id: newUser._id,
    //     username: newUser.username,
    //     email: newUser.email,
    //     password: null  // Ensure password is excluded
    //   },
    //   token,
    // };

    // Return only the token
    return { token };

  },
};

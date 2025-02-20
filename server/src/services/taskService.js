import { Task } from "../models/taskModel.js";

export const TaskService = {
      getAllTasks: async () => {
         return await Task.find();
      },
      getTaskById: async (id) => {
         return await Task.findById(id);
      },
      createTask: async (title , description , completed) => {

         const newTask = new Task({ title , description , completed });
         await newTask.save();
         return newTask;

      },
      updateTask: async (id, taskInput) => {
         return await Task.findByIdAndUpdate(id, taskInput, { new: true });
      },
      deleteTask: async (id) => {
         return await Task.findByIdAndDelete(id);
      },
   };

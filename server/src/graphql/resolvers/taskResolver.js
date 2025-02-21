import { TaskService } from "../../services/taskService.js";

export const taskResolver = {
   Query: {
      getAllTasks: async () => {
         return await TaskService.getAllTasks();
      },
      getTaskById: async (_, { id }) => {
         return await Task.findById(id);
      },
   },

   Mutation: {
      createTask: async (_, { taskInput }) => {
         const { title, description, completed } = taskInput;

         // call the taskservice
         return await TaskService.createTask(title, description, completed);

         
      },
      updateTask: async (_, { id, taskInput }) => {
         return await Task.findByIdAndUpdate(id, taskInput, { new: true });
      },
      deleteTask: async (_, { id }) => {
         return await TaskService.deleteTask(id);
      },
   },

}
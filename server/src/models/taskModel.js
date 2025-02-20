import { Schema , model } from "mongoose";

const taskSchema = new Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   completed: { type: Boolean, required: true },
   });

export const Task = model('tasks', taskSchema);
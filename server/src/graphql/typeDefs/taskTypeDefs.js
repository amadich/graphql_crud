import { gql } from "apollo-server";

export const taskTypeDefs = gql`
   type Task {
      _id: ID!
      title: String!
      description: String!
      completed: Boolean!
   }
   
   input TaskInput {
      title: String!
      description: String!
      completed: Boolean!
   }
   
   type Query {
      getAllTasks: [Task!]!
      getTaskById(id: ID!): Task!
   }
   
   type Mutation {
      createTask(taskInput: TaskInput!): Task!
      updateTask(id: ID!, taskInput: TaskInput!): Task!
      deleteTask(id: ID!): Task!
   }
  
  
`;

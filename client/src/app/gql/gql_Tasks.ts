import { gql } from '@apollo/client';

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($taskInput: TaskInput!) {
    createTask(taskInput: $taskInput) {
      _id
      title
      description
      completed
    }
  }
`;


export const GET_ALL_TASKS_QUERY = gql`
  query GetAllTasks {
    getAllTasks {
      _id
      title
      description
      completed
    }
  }
`;

import { gql } from 'apollo-server';

export const userTypeDefs =  gql`

   type User {
      _id: ID!
      username: String!
      email: String!
      password: String!
   }

   input RegisterInput {
      username: String!
      email: String!
      password: String!
   }

   type AuthPayload {
    token: String!
  }

   type Query {
      getAllUsers: [User!]!
      getUserById(id: ID!): User!
   }

   type Mutation {
      createUser(registerInput: RegisterInput!): AuthPayload!
   }

`;
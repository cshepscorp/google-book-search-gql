// import tagged gql template function
// tagged templates are an advanced use of template literals
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: Int
    title: String
    authors: String
    description: String
    image: String
    link: String
  }

  input BookInput {
    bookId: Int
    title: String
    authors: String
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    removeBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;
// login(email: String!, password: String!): User

// const typeDefs = gql`
//   type Query {
//     helloWorld: String
//   }
// `;

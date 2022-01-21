// import tagged gql template function
// tagged templates are an advanced use of template literals
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    helloWorld: String
    users: [User]
    user(username: String!): User
  }
`;

module.exports = typeDefs;

// const typeDefs = gql`
//   type Query {
//     helloWorld: String
//   }
// `;

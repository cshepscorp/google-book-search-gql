import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       savedBooks
//     }
//   }
// `;



// export const SAVE_BOOK = gql`
//   mutation saveBook($bookId: Int!, $description: String!, $title: String!, $image: String, $link: String) {
//     saveBook(bookId: $bookId, description: $description, title: $title, image: $image, link: $link) {
//       bookId
//       title
//       description
//       image
//       link
//       user {
//         _id
//       }
//     }
//   }
// `;


export const REMOVE_BOOK = gql`
mutation removeBook($bookId: Int!) {
  removeBook(bookId: $bookId) {
    User
  }
}
`;
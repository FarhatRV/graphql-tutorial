import { gql } from "@apollo/client";

export const GET_BOOK_BY_ID = gql`
  query getBookById($bookid: Int) {
    book(id: $bookid) {
      name
      id
      author {
        name
      }
    }
  }
`;

export const GET_ALL_BOOKS = gql`
  query {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

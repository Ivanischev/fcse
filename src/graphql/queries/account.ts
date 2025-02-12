import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

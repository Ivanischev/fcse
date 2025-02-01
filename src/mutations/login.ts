import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

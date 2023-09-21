import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
  #graphql
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

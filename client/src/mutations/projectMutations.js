import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
  #graphql
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

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

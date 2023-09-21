import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

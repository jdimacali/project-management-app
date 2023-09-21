import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  #graphql
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

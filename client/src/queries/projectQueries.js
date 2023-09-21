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

export const GET_PROJECT = gql`
  #graphql
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

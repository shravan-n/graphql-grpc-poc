import { gql } from "apollo-server";

export const GET_CONTRACTS = gql`
  query {
    getContracts {
      name
    }
  }
`;

export const GET_CONTRACT = gql`
  query ($contractId: ID!) {
    getContract(contractId: $contractId) {
      name
    }
  }
`;

export const LOGIN = gql`
  query ($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const ADD_CONTRACT = gql`
  mutation ($input: ContractInput!) {
    createContract(input: $input) {
      name
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation ($contractId: ID!, $contractInput: ContractInput!) {
    updateContract(contractId: $contractId, contractInput: $contractInput) {
      contractId
      name
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation ($contractId: ID!) {
    deleteContract(contractId: $contractId)
  }
`;

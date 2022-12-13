import { gql } from "@apollo/client";

export const GET_CONTRACTS = gql`
  query {
    getContracts {
      contractId
      name
      type
      perPayment
      paymentAmount
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation ($contractInput: ContractInput!) {
    createContract(contractInput: $contractInput) {
      contractId
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation ($contractId: ID!, $contractInput: ContractInput!) {
    updateContract(contractId: $contractId, contractInput: $contractInput) {
      contractId
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation ($contractId: ID!) {
    deleteContract(contractId: $contractId)
  }
`;

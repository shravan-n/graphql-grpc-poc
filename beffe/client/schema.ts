import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getContracts: [Contract]
    getContract(contractId: ID!): Contract
    login(username: String!, password: String!): String
  }

  type Contract {
    contractId: ID!
    name: String
    type: String
    perPayment: Float
    paymentAmount: Float
  }

  type User {
    name: String!
    password: String!
  }

  type Mutation {
    createContract(contractInput: ContractInput!): Contract
    updateContract(contractId: ID!, contractInput: ContractInput!): Contract
    deleteContract(contractId: ID!): Boolean!
  }

  input ContractInput {
    name: String
    type: String
    perPayment: Float
    paymentAmount: Float
  }
`;

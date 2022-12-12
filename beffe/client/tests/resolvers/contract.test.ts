import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "../../schema";
import { Query } from "../../resolvers/Query";
import { Mutation } from "../../resolvers/Mutation";
import {
  ADD_CONTRACT,
  DELETE_CONTRACT,
  GET_CONTRACT,
  GET_CONTRACTS,
  LOGIN,
  UPDATE_CONTRACT,
} from "../queries/query";

const mocks = {
  Int: () => 4,

  Float: () => 10.2,

  String: () => "Contract1",

  Boolean: () => true,

  Contract: () => ({
    contractId: 1,
    name: "Contract2",
  }),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Query,
        Mutation,
      },
    }),
    mocks,
  }),
});

describe("Query tests", () => {
  test("Should return contracts", async () => {
    let result = await server.executeOperation({
      query: GET_CONTRACTS,
    });
    expect(result).toBeTruthy();
    expect(result.data?.getContracts[0]).toEqual({ name: "Contract2" });
  });

  test("Should return contract", async () => {
    let result = await server.executeOperation({
      query: GET_CONTRACT,
      variables: {
        contractId: "1",
      },
    });
    expect(result).toBeTruthy();
    expect(result.data?.getContract.name).toBe("Contract2");
  });

  test("Should add contract", async () => {
    let result = await server.executeOperation({
      query: ADD_CONTRACT,
      variables: {
        input: {
          name: "Contract2",
          type: "Monthly",
          perPayment: 1000,
          paymentAmount: 1000,
        },
      },
    });
    expect(result).toBeTruthy();
    let result1 = await server.executeOperation({
      query: GET_CONTRACTS,
    });
    expect(result1.data?.getContracts).toHaveLength(2);
  });

  test("Should update contract", async () => {
    let result = await server.executeOperation({
      query: UPDATE_CONTRACT,
      variables: {
        contractId: "1",
        contractInput: {
          name: "Contract2",
          type: "Monthly",
          perPayment: 1000,
          paymentAmount: 1000,
        },
      },
    });
    expect(result).toBeTruthy();
    expect(result.data?.updateContract.name).toBe("Contract2");
  });

  test("Should delete contract", async () => {
    let result = await server.executeOperation({
      query: DELETE_CONTRACT,
      variables: {
        contractId: "1",
      },
    });
    expect(result).toBeTruthy();
    expect(result.data?.deleteContract).toBe(true);
  });

  test("Should login", async () => {
    let result = await server.executeOperation({
      query: LOGIN,
      variables: { username: "shravan", password: "Shra1@123" },
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
  });
});

import { ApolloServer } from "apollo-server";
import { authenticateRequest } from "./interceptors/authentication";
import { Mutation } from "./resolvers/Mutation";
import { Query } from "./resolvers/Query";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: ({ req, res }) => {
    console.log(req);
    console.log(res);
    const authenticatedUser = authenticateRequest(req, res);
    const ctx = {
      user: authenticatedUser,
    };
    return ctx;
  },
});

server.listen().then(({ url }) => {
  console.log("server is ready at: " + url);
});

import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./graphql/resolvers";
console.log('index test111');

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
});

server.start(() => console.log("graphql server running111"));
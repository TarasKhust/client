import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === "development" ? "http://localhost:3000/graphql" : "https://servercrm.herokuapp.com/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
});

export default client;

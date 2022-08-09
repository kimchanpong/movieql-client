import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: `http://localhost:4000`,
    cache: new InMemoryCache(),
});

client.query({
    query: gql`
        {
          allMovies {
            id
            title
            rating
            summary
            genres
          }
        }
    `
}).then(data => console.log(data));

export default client;
import ApolloClient from "apollo-boost";
import withApollo from "next-with-apollo";
import { endpoint } from "../config";
import { LOCAL_STATE_QUERY } from "../components/Cart";
import { LOCAL_SEARCH_QUERY } from "../components/SearchForm";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCartOpen: (_, variables, { cache }) => {
            const { cartOpen } = cache.readQuery({ query: LOCAL_STATE_QUERY });

            const data = {
              data: {
                cartOpen: !cartOpen
              }
            };

            cache.writeData(data);

            return data;
          },
          toggleSearchOpen: (__, variables, { cache }) => {
            const { searchOpen } = cache.readQuery({
              query: LOCAL_SEARCH_QUERY
            });

            const data = {
              data: {
                searchOpen: !searchOpen
              }
            };

            cache.writeData(data);

            return data;
          }
        }
        // Mutation: {

        // }
      },

      defaults: {
        cartOpen: false,
        searchOpen: false
      }
    }
  });
}

export default withApollo(createClient);

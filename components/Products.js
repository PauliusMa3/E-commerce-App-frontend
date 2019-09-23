import React from "react";
import ProductStyles from "../components/styles/ProductStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Product from "./Product";
import User from "./User";
import Pagination from "./Pagination";
import { perPage } from "../config";
import styled from "styled-components";


const Center = styled.div`
  text-align: center;
`;

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($first: Int = ${perPage}, $skip: Int = 0 ) {
    items(first: $first, skip: $skip){
      id
      title
      price
      image
      user {
        id
      }
    }
  }
`;

const Products = props => {
  // const checkPermissions = (user, item) => {
  //   if (!user) {
  //     return false;
  //   }
  //   const requiredPermission = ["ADMIN", "ITEMDELETE"];
  //   const hasPermissions = user.permissions.some(permission =>
  //     requiredPermission.includes(permission)
  //   );

  //   const ownsItem = item.user.id === user.id;

  //   if (ownsItem || hasPermissions) {
  //     return true;
  //   }

  //   return false;
  // };
  return (
    <User>
      {({ data: { me } }) => {
        return (
          <Center>
            <Pagination page={props.page} />
            <Query
              query={ALL_PRODUCTS_QUERY}
              variables={{ skip: perPage * props.page - perPage }}
            >
              {({ data, loading, error }) => {
                console.log("pagination data: ", data);
                if (loading) return <p>Loading...</p>;
                if (error) return <p>{error.message}</p>;
                return (
                  <ProductStyles>
                    {data.items.map(product => (
                      <Product
                        key={product.id}
                        product={product}
                        user={me}
                      />
                    ))}
                  </ProductStyles>
                );
              }}
            </Query>
          </Center>
        );
      }}
    </User>
  );
};

export default Products;
export { ALL_PRODUCTS_QUERY };

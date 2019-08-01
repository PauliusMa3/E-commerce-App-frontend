import React from "react";
import ProductStyles from "../components/styles/ProductStyles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Product from "./Product";
import User from "./User";
const ALL_PRODUCTS_QUERY = gql`
  query {
    items {
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

const Products = () => {
  const checkPermissions = (user, item) => {
    if (!user) {
      return false;
    }
    const requiredPermission = ["ADMIN", "ITEMDELETE"];
    const hasPermissions = user.permissions.some(permission =>
      requiredPermission.includes(permission)
    );

    const ownsItem = item.user.id === user.id;

    if (ownsItem || hasPermissions) {
      return true;
    }

    return false;
  };
  return (
    <User>
      {({ data: { me } }) => {
        return (
          <Query query={ALL_PRODUCTS_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>{error.message}</p>;
              return (
                <ProductStyles>
                  {data.items.map(product => (
                    <Product
                      key={product.id}
                      product={product}
                      hasPermissions={checkPermissions(me, product)}
                    />
                  ))}
                </ProductStyles>
              );
            }}
          </Query>
        );
      }}
    </User>
  );
};

export default Products;
export { ALL_PRODUCTS_QUERY };

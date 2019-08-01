import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const USER_QUERY = gql`
  query {
    me {
      id
      name
      email
      permissions
      cart {
        id
        quantity
        item {
          id
          title
          price
          image
        }
      }
    }
  }
`;

const User = props => {
  return <Query {...props} query={USER_QUERY}>{payload => props.children(payload)}</Query>;
};

export default User;
export {USER_QUERY};

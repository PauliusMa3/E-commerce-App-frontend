import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { USER_QUERY } from "./User";
import Router from "next/router";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
    }
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.red};
  border-radius: 5px;
  border: 0;
  font-size: 20px;
  font-weight: 600;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.lightRed};
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

const AddToCart = props => {
  return (
    <Mutation
      mutation={ADD_TO_CART_MUTATION}
      variables={{ id: props.id }}
      refetchQueries={[{ query: USER_QUERY }]}
    >
      {(addToCart, { loading }) => {
        return (
          <Button disabled={loading} onClick={addToCart}>
            Add{loading && "ing"} To Cart
          </Button>
        );
      }}
    </Mutation>
  );
};

export default AddToCart;
export { ADD_TO_CART_MUTATION };

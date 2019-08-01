import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { USER_QUERY } from "./User";

const Button = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  border-radius: 50%;
  background: ${props => props.theme.lightgrey};
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.grey};
  }
`;

const REMOVE_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

class RemoveFromCart extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: USER_QUERY });
    const removedItemId = payload.data.removeFromCart.id;

    data.me.cart = data.me.cart.filter(item => item.id !== removedItemId);

    cache.writeQuery({ query: USER_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: "Mutation",
          removeFromCart: {
            id: this.props.id,
            __typename: "CartItem"
          }
        }}
      >
        {(removeFromCart, { loading }) => (
          <Button disabled={loading} onClick={removeFromCart}>
            &times;
          </Button>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;

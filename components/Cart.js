import React, { Component } from "react";
import User from "./User";
import CartStyles from "./styles/CartStyles";
import CartItem from "./CartItem";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import formatCurrency from "./utils/formatCurrency";
import styled from "styled-components";
import TakeMoney from "./TakeMoney";
import calculateTotalPrice from "./utils/calculateTotalPrice";
import CloseIcon from "../assets/icons/close.svg";

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCartOpen @client
  }
`;

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const Button = styled.div`
  margin-top: 2rem;
  padding: 1.2rem 1rem;
  border-radius: 100px;
  background: ${props => props.theme.red};
  color: white;
  letter-spacing: 1px;
  text-align: center;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
  }
`;

const Cart = () => (
  <User>
    {({ data: { me } }) => {
      if (!me) return null;
      return (
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => {
            return (
              <CartStyles open={data.cartOpen}>
                <header>
                  <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {toggleCartOpen => {
                      return (
                        // <button onClick={toggleCartOpen}>
                          <img
                            src={CloseIcon}
                            alt="Close"
                            onClick={toggleCartOpen}
                          />
                        // </button>
                      );
                    }}
                  </Mutation>
                  <p>
                    You have {me.cart.length} item
                    {me.cart.length === 1 ? "" : "s"} in your cart.
                  </p>
                </header>
                <ul>
                  {me.cart.map(cartItem => (
                    <CartItem cartItem={cartItem} />
                  ))}
                </ul>
                <footer>
                  <span>Total: </span>
                  {formatCurrency(calculateTotalPrice(me.cart))}
                  <TakeMoney>
                    <Button disabled={me.cart.length === 0}>Checkout</Button>
                  </TakeMoney>
                </footer>
              </CartStyles>
            );
          }}
        </Query>
      );
    }}
  </User>
);

export default Cart;
export { LOCAL_STATE_QUERY };
export { TOGGLE_CART_MUTATION };

import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import { USER_QUERY } from "./User";
import User from "./User";
import calculateTotalPrice from "./utils/calculateTotalPrice";
import gql from "graphql-tag";
import Router from "next/router";

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      total
      charge
      items {
        id
        title
      }
    }
  }
`;

class TakeMoney extends Component {
  onToken = async (res, createOrder) => {
    const order = await createOrder({
      variables: {
        token: res.id
      }
    });

    Router.push({
      pathname: "/order",
      query: {
        id: order.data.createOrder.id
      }
    });
  };
  render() {
    return (
      <User>
        {({ data: { me } }) => {
          if (!me) return null;
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: USER_QUERY }]}
            >
              {createOrder => (
                <StripeCheckout
                  name="Tracky Tronics"
                  currency="EUR"
                  billingAddress
                  description={`Order of ${me.cart.length} items!`}
                  amount={calculateTotalPrice(me.cart)}
                  stripeKey="pk_test_fevI9JSzAJhh9zQ6mcrd3AMP00A1OCChOa"
                  token={res => this.onToken(res, createOrder)}
                >
                  {this.props.children}
                </StripeCheckout>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakeMoney;

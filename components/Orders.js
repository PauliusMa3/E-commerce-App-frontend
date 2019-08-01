import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import OrderStyles from "../components/styles/OrderStyles";
import format from "date-fns/format";
import formatCurrency from "./utils/formatCurrency";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createAt_DESC) {
      id
      total
      createAt
      user {
        id
      }
      items {
        id
        title
        image
        price
        quantity
      }
    }
  }
`;

const notification = styled.p`
  margin: 1rem auto;
  font-size: 3rem;
  letter-spacing: 1px;
  font-weight: 700;
`;

class Orders extends Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data, loading, error }) => {
          const { orders } = data;
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <div>
              {orders.map(order => (
                <OrderStyles>
                  <header className="order-header">
                    <p>
                      <span>Order Placed: </span>
                      <span>
                        {format(new Date(order.createAt), "d MMMM yyyy ", {
                          awareOfUnicodeTokens: true
                        })}
                      </span>
                    </p>

                    <p>
                      <span>Items: </span>
                      <span>{order.items.length}</span>
                    </p>
                    <p>
                      <span>Total: </span>
                      <span>{formatCurrency(order.total)}</span>
                    </p>
                    <p>
                      <span>Order ID: </span>
                      <span>{order.id}</span>
                    </p>
                  </header>
                  <div className="order-items">
                    {order.items.map(item => {
                      return (
                        <div className="order-item">
                          <div className="order-item-image">
                            <img src={item.image} />
                          </div>

                          <div className="order-item-details">
                            <p className="order-item-title">{item.title}</p>
                            <p>Qty: {item.quantity}</p>
                            <p>
                              Each:
                              <span className="order-item-price">
                                {formatCurrency(item.price)}
                              </span>
                            </p>
                            <p>
                              SubTotal:{" "}
                              {formatCurrency(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </OrderStyles>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Orders;

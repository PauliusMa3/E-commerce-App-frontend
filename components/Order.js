import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import formatCurrency from "./utils/formatCurrency";
import format from "date-fns/format";
import OrderStyles from "./styles/OrderStyles";

const ORDER_QUERY = gql`
  query order($id: ID!) {
    order(id: $id) {
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

class Order extends Component {
  render() {
    return (
      <Query query={ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          if (error) return <p>{error.message}</p>;
          if (loading) return <p>Loading...</p>;

          const { order } = data;
          return (
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
                          SubTotal: {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </OrderStyles>
          );
        }}
      </Query>
    );
  }
}

export default Order;

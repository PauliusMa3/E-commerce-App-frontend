import React from "react";
import styled from "styled-components";
import formatCurrency from "./utils/formatCurrency";
import RemoveFromCart from "./RemoveFromCart";
import PlusIcon from "../assets/icons/add.svg";
import MinusIcon from "../assets/icons/substract.svg";
import { ADD_TO_CART_MUTATION } from "./AddToCart";
import { Mutation } from "react-apollo";
import { USER_QUERY } from "./User";
import gql from "graphql-tag";
import CartItemStyles from "./styles/CartItemStyles";
import QuantityButton from "./styles/QuantityButton";

const UPDATE_QUANTITY_MUTATION = gql`
  mutation UPDATE_QUANTITY_MUTATION($id: ID!) {
    updateQuantity(id: $id) {
      id
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  grid-area: "quantity";
  justify-content: center;

  input {
    width: 25px;
    border: 0;
    text-align: center;
  }
`;

const CartItem = props => {
  const {
    cartItem: { item }
  } = props;
  const { cartItem } = props;
  return (
    <CartItemStyles>
      <img src={item.image} alt="item image" />
      <div className="cart-item__details">
        <h2>{item.title}</h2>

        <p className="cart-item__price">
          {formatCurrency(item.price * cartItem.quantity)}

          {" - "}
          <em>
            {cartItem.quantity} &times; {formatCurrency(cartItem.item.price)}{" "}
            each
          </em>
        </p>
      </div>
      <Wrapper>
        <Mutation
          mutation={ADD_TO_CART_MUTATION}
          variables={{ id: cartItem.item.id }}
          refetchQueries={[{ query: USER_QUERY }]}
          optimisticResponse={{
            __typename: "Mutation",
            addToCart: {
              id: cartItem.item.id,
              __typename: "CartItem"
            }
          }}
        >
          {(addToCart, { loading }) => (
            <QuantityButton
              disabled={loading}
              type="button"
              name="button"
              onClick={addToCart}
            >
              <img src={PlusIcon} alt="Add Quantity" />
            </QuantityButton>
          )}
        </Mutation>
        <input type="text" name="name" value={cartItem.quantity} />
        <Mutation
          mutation={UPDATE_QUANTITY_MUTATION}
          variables={{ id: cartItem.id }}
          refetchQueries={[{ query: USER_QUERY }]}
          optimisticResponse={{
            __typename: "Mutation",
            updateQuantity: {
              id: cartItem.id,
              __typename: "CartItem"
            }
          }}
        >
          {(updateQuantity, { loading }) => (
            <QuantityButton
              disabled={loading}
              type="button"
              name="button"
              onClick={updateQuantity}
            >
              <img src={MinusIcon} alt="Remove Quantity" />
            </QuantityButton>
          )}
        </Mutation>
      </Wrapper>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

export default CartItem;

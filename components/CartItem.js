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

const UPDATE_QUANTITY_MUTATION = gql`
  mutation UPDATE_QUANTITY_MUTATION($id: ID!) {
    updateQuantity(id: $id) {
      id
    }
  }
`;

const CartItemStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
  grid-template-areas: "image details quantity remove";
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  padding: 0.7rem;
  img {
    width: 100px;
    object-fit: cover;
    margin-right: 10px;
  }

  .cart-item__price {
    font-size: 1.2rem;
    color: ${props => props.theme.grey};
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

const Button = styled.button`
  border-radius: 5px;
  border: 0;
  position: relative;
  width: 30px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.grey};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.5;
  }

  img {
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CartItem = props => {
  const {
    cartItem: { item }
  } = props;
  const { cartItem } = props;

  console.log("itemeeliiss", cartItem);
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
            <Button
              disabled={loading}
              class="plus-btn"
              type="button"
              name="button"
              onClick={addToCart}
            >
              <img src={PlusIcon} alt="Add Quantity" />
            </Button>
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
            <Button
              disabled={loading}
              class="minus-btn"
              type="button"
              name="button"
              onClick={updateQuantity}
            >
              <img src={MinusIcon} alt="Remove Quantity" />
            </Button>
          )}
        </Mutation>
      </Wrapper>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

export default CartItem;

import styled from "styled-components";
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

export default CartItemStyles;

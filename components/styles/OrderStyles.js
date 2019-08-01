import styled from "styled-components";

const OrderStyles = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  .order-header {
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.lightGrey200};

    padding: 2rem;
    p {
      /* margin-right: 1rem; */
    }

    span {
      font-size: 1.2rem;
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }

  .order-items {
    display: flex;
    flex-direction: column;
  }

  .order-item {
    display: grid;
    border-bottom: 1px solid #eeeeee;

    grid-template-columns: 1fr 3fr;

    p {
        font-size: 1.4rem;
    }

    .order-item-image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100px;
        object-fit: cover;
      }
    }
    .order-item-details {
        padding: .8rem;
    }

    .order-item-title {
      font-size: 1.6rem;
      color: ${props => props.theme.blue};
      cursor: pointer;
      transition: all .2s;

      &:hover {
        color: ${props => props.theme.red};
      }
    }

    .order-item-price {
      font-size: 1.4rem;
      color: ${props => props.theme.red};
      font-weight: 900;
      margin-left: 5px;
    }
  }
`;

export default OrderStyles;

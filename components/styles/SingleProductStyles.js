import styled from "styled-components";

const SingleProductStyles = styled.div`
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.09);
  transition: all 0.2s;
  text-align: center;
  overflow-wrap: break-word;
  padding: 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }

  .delete-button {
    display: flex;
  }

  .product-price {
    font-size: 1.4rem;
    font-weight: 900;
    padding: 0.5rem;
    color: #d50000;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export default SingleProductStyles;

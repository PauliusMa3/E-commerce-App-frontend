import styled from "styled-components";

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 4rem;
  margin: 7rem auto;
  max-width: 1300px;
`;

export default ProductStyles;

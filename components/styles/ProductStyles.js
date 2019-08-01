import styled from "styled-components";

const ProductStyles = styled.div`
  display: grid;
  grid-column: 2 / span 7;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: auto;
  grid-gap: 4rem;
  margin: 7rem auto;

  /* margin-top: 10rem; */
  max-width: 1140px;
`;

export default ProductStyles;

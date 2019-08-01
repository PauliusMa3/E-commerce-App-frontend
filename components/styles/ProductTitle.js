import styled from "styled-components";

const ProductTitle = styled.h3`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${props => props.theme.black};
    display: inline;
    padding: 0 1rem;
  }
`;

export default ProductTitle;

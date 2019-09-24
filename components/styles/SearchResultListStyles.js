import styled from 'styled-components';

const SearchResultListStyles = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem auto;
  position: relative;
  width: 80%;

  @media (max-width: 600px) {
    width: 100%;
  }

  box-sizing: border-box;

  .product-list__item {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
  }

  .product-card {
    display: grid;
    grid-template-columns: 110px 1fr auto;
    align-items: center;
    position: relative;
    grid-auto-rows: 150px;
    padding: 1.3rem;
    img {
      width: 100px;
      object-fit: cover;
      margin-right: 1rem;
    }

    a {
      text-decoration: none;
      font-size: 1.8rem;
      color: ${props => props.theme.black};
      transition: all 0.4s;

      &:hover,
      &:active {
        text-decoration: underline;
      }
    }

    span {
      font-size: 1.8rem;
      color: ${props => props.theme.red};
    }
  }
`;

export default SearchResultListStyles;
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.8rem 0;
  img {
    height: 20px;
  }

  button {
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
    background: white;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &[disabled] {
      opacity: 0.5;
    }
  }

  p {
    font-size: 1.6rem;
  }

  .active {
    background: red;
  }
`;

export default PaginationStyles;
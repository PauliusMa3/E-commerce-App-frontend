import styled from "styled-components";

const SearchFormStyles = styled.form`
  position: relative;
  width: 60%;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 90%;
  }

  input {
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1.8rem;
    border: 1px solid ${props => props.theme.lightgrey};
    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 0;
    background: ${props => props.theme.lightgrey};
    height: 100%;
    width: 50px;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;

    &:focus,
    &:active {
      outline: none;
    }

    &:hover {
      background: ${props => props.theme.grey};
    }

    img {
      height: 20px;
      z-index: 100;
    }
  }
`;

export default SearchFormStyles;

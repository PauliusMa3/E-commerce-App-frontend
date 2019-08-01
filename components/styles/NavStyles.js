import styled from "styled-components";

const NavStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  .menu-icon {
    display: none;
    @media only screen and (min-width: 320px) and (max-width: 600px) {
      display: block;
      height: 5rem;
      background: white;
      display: flex;
      align-items: center;
      border-radius: 50%;
      padding: 1rem;
    }
  }

  a,
  button {
    border: 0;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    background: none;
    font-family: "Montserrat";
    align-items: center;
    padding: 1rem 3rem;
    color: ${props => props.theme.black};
    font-weight: 300;
    cursor: pointer;
    position: relative;

    img {
      height: 20px;
      color: ${props => props.theme.black};
    }

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      a,
      button {
        display: none;
      }
    }

    &:after {
      content: "";
      width: 0;
      background: ${props => props.theme.red};
      position: absolute;
      height: 2px;
      transform: translateX(-50%);
      transition: width 0.2s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }

    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: 70%;
      }
    }
  }
`;

export default NavStyles;

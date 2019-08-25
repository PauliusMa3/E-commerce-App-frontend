import styled from "styled-components";

const NavStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: ${props => (props.expanded ? "flex" : "none")};

    flex-direction: column;
    width: 0%;
    justify-content: center;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 9999;
    background: red;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
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

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      font-size: 2rem;
      color: white;
      &:hover,
      &:focus {
        color: ${props => props.theme.red};

        &:after {
          content: none;
        }
      }
    }

    img {
      height: 20px;
      color: ${props => props.theme.black};
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

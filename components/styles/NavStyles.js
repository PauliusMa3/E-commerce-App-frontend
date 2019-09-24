import styled from "styled-components";

const NavStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;

    flex-direction: column;
    justify-content: center;

    position: fixed;
    top: 100px;
    left: 0;
    transform: translateX(-100%);
    ${props => props.expanded && `transform: translateX(0)`};
    transition: all 0.4s cubic-bezier(0.29, 0.63, 0.44, 1);
    /* transform: translateY(100%); */
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
    background: none;
    font-family: "Montserrat";
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

import styled from "styled-components";

const CartStyles = styled.div`
  height: 100%;
  position: relative;
  background: #fff;
  z-index: 100;
  transform: translateX(100%);

  /* transition: all 0.2s; */
  transition: all 0.4s cubic-bezier(0.29, 0.63, 0.44, 1);
  border: 1px solid ${props => props.theme.lightgrey};
  top: 0;
  right: 0%;
  width: 35%;
  /* min-width: 500px; */
  position: fixed;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto 1fr auto;

  ${props => props.open && `transform: translateX(0%)`};

  ul {
    margin: 0;
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;
    overflow-y: scroll;
  }

  header {
    p {
      font-size: 2rem;
      text-align: center;
    }

    button {
      /* background: none; */
      border: 0;

      img {
        z-index: 15;
        fill: red;
      }
    }

    img {
      height: 20px;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }

  footer {
    border-top: 3px solid ${props => props.theme.black};
    padding: 1rem;
    font-size: 2rem;
    font-weight: 800;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
  }
`;
export default CartStyles;

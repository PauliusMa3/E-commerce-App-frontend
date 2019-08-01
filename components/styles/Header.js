import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  flex-shrink: 0;

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: flex-end;
    background: ${props => props.theme.offWhite};
    /* position: fixed;
    top: 0;
    width: 100%; */
  }

  .sub-bar {
    width: 60%;
    margin: 2rem auto;

    @media (max-width: 600px) {
      width: 90%;
    }
  }

  .header-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    text-align: center;
    .btn-header {
      &,
      &:link,
      &:visited {
        font-size: 2rem;
        color: ${props => props.theme.offWhite};
        background-color: rgba(0, 0, 0, 0.6);
        padding: 2rem 4rem;
        border-radius: 100px;
        cursor: pointer;
        transition: all 0.4s;
      }
    }

    .heading-primary {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.offWhite};
      border-bottom: 3rem;
      margin-bottom: 6rem;
      .heading-primary--main {
        font-size: 4rem;
        letter-spacing: 1rem;
        text-transform: uppercase;
      }
      .heading-primary--sub {
        display: block;
        letter-spacing: 1rem;
        margin-top: 1rem;
        text-transform: uppercase;
      }
    }
  }
`;

export default StyledHeader;

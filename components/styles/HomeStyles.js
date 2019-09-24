import styled from 'styled-components';

const HomeStyles = styled.div`
  margin-top: 100px;
  .image__section {
    margin: 0;
    width: 100%;
    height: 90vh;
    display: block;
    position: relative;

    p {
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-size: 3rem;
      text-align: center;
      color: ${props => props.theme.offWhite};
    }

    a {
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      font-size: 3rem;
      border-radius: 5px;
      color: ${props => props.theme.offWhite};
      background: ${props => props.theme.red};
      padding: 1rem 3rem;
      text-decoration: none;
      transition: all 0.4s;

      &:hover {
        background: ${props => props.theme.darkerRed};
      }
    }

    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      content: "";
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .product__hero {
    max-width: 1300px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 500px;
    grid-gap: 30px;
    align-items: center;
    padding: 15px;

    p {
      font-size: 1.8rem;
      line-height: 1.4;
    }

    .copy__wrapper {
      h2 {
        font-size: 2rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default HomeStyles;
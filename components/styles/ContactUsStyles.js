import styled from 'styled-components';

const ContactUsStyles = styled.div`
  margin: 0;
  padding: 0;
  height: 90vh;
  width: 100%;
  margin-top: 100px;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  h1 {
    position: absolute;
    font-size: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
  }

  .contact-us-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    z-index: 2;
    font-size: 2rem;
    box-shadow: 0 4px 12px rgba(102, 102, 102, 0.15);

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      width: 90%;
    }

    .contact-us-icon {
      height: 75px;
      width: 75px;
    }

    button {
      padding: 13px 20px;
      font-size: 1.8rem;
      color: white;
      font-weight: 500;
      background: ${props => props.theme.red};
      border: none;
      transition: all 0.25s;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme.darkerRed};
      }
    }
  }
`;

export default ContactUsStyles;
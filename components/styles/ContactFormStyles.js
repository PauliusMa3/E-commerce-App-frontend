import styled from 'styled-components';

const ContactFormStyles = styled.form`
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;

  span {
    font-family: "Chilanka-Regular";
    font-size: 30px;
    text-align: center;
  }

  p {
    font-family: "Chilanka-Regular";
    font-size: 15px;
    text-align: center;
    letter-spacing: 1px;
  }
  padding: 4rem 6rem;
  border-radius: 10px;
  input {
    width: 100%;
    display: block;
    padding: 10px;
  }

  label {
    text-align: left;
    color: ${props => props.theme.black};
    font-size: 14px;
  }

  textarea,
  input {
    border: 1px solid ${props => props.theme.lightgrey};
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 3px;
    transition: all 0.2s;

    &:hover {
      border: 1px solid #30aabc;
    }

    &:focus {
      border: 1px solid #30aabc;
      outline: none;
    }
  }

  button {
    font-size: 18px;
    text-align: center;
    padding: 8px 15px;
    background: ${props => props.theme.blue};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    width: 25%;
    transition: all 0.25s;

    &:hover {
      background: ${props => props.theme.darkerBlue};
    }
  }

  textarea {
    background: #fcfdfd;
    min-height: 150px;
    width: 100%;
    padding: 15px;
  }
`;

export default ContactFormStyles;
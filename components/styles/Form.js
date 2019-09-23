import styled from "styled-components";

const Form = styled.form`
  padding: 5rem;
  margin: 3rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 100%;
    padding: 8px;
  }

  label {
    display: block;
    font-size: 1.6rem;
    padding: 10px 0;
    font-weight: bold;
    display: block;
  }

  textarea {
    height: 200px;
    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.lightgrey};

    &:focus {
      outline: 0;
      border-color: #29b6f6;
    }
  }

  fieldset {
    border: none;
    margin: 0;

    &:disabled {
      opacity: 0.5;
    }
  }

  input[type="submit"] {
    background-color: red;
  }

  .product-form--button {
    background: ${props => props.theme.red};
    padding: 1rem 1.2rem;
    font-size: 1.8rem;
    border-radius: 5px;
    color: ${props => props.theme.offWhite};
    border: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default Form;

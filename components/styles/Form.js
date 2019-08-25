import styled from "styled-components";

const Form = styled.form`
  /* max-width: 500px; */
  width: 400px;
  padding: 20px;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 90%;
    padding: 8px;
  }

  label {
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 2rem;
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

  .product-form--textarea {
    height: 100px;
  }

  .product-form--button {
    background: ${props => props.theme.red};
    padding: 1rem 1.2rem;
    font-size: 1.4rem;
    border-radius: 25px;
    color: ${props => props.theme.offWhite};
    border: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default Form;

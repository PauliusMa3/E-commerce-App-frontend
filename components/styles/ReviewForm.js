import styled from 'styled-components';

const ReviewForm = styled.form`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  textarea {
    border: 0;
    outline: 0;
    padding: 2rem;
    font-size: 2rem;
    height: 200px;
    width: 100%;
  }

  .review-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${props => props.theme.lightgrey};

    span {
      margin-top: 1rem;
      font-size: 1.5rem;
    }

    * > & {
      flex: 1;
    }
  }

  .review__stars {
    display: flex;
    justify-content: center;
    padding: 1rem;



    label {
      color: #ddd;
    }
    input {
      display: none;

      &:checked {
        & ~ label {
          color: ${props => props.theme.yellow};
        }
      }

      & + label {
        font-size: 0;
        &:before {
          content: "★";
          font-size: 4rem;
        }

        &[for="star5"] {
          order: 1;
        }
        &[for="star4"] {
          order: 2;
        }
        &[for="star3"] {
          order: 3;
        }
        &[for="star2"] {
          order: 4;
        }
        &[for="star1"] {
          order: 5;
        }
        &:hover,
        &:hover ~ label {
          color: lighten(yellow, 20%);
        }
      }
    }
  }

  .review-button {
    width: 50%;
    background: ${props => props.theme.lightRed};
    padding: 1.5rem 0.8rem;
    border: 0;
    border-radius: 5px;
    font-size: 1.5rem;
    color: ${props => props.theme.offWhite};
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

export default ReviewForm;
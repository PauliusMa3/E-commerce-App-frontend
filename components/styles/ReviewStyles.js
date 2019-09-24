import styled from 'styled-components';

const ReviewStyles = styled.div`
  border: 1px solid ${props => props.theme.lightGrey200};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding-left: 5px;
  position: relative;

  &::before {
    width: 5px;
    background: red;
    position: absolute;
    height: 100%;
    left: 0;
    content: "";
  }

  .review__header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${props => props.theme.lightGrey200};

    .review__author {
      padding-left: 2rem;
      font-size: 2rem;
    }

    .review__rating {
      display: flex;
      justify-content: center;
      font-size: 3rem;
      color: ${props => props.theme.yellow};
    }

    .review__time {
      display: flex;
      justify-content: center;
    }

    & > * {
      flex: 1;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${props => props.theme.lightGrey200};
      height: 100%;

      &:last-child {
        border-right: 0;
      }
    }
  }

  .review__body {
    padding: 2rem;

    p {
      white-space: pre-wrap;
      font-size: 1.8rem;
      line-height: 1.6;
    }
  }
`;

export default ReviewStyles;
import React, { Component } from "react";
import styled from "styled-components";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const Wrapper = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 600;
  }
`;

const Container = styled.div`
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

const Reviews = props => {
  return (
    <Wrapper>
      <h2>Reviews ({props.reviews.length})</h2>
      {props.reviews.map(review => (
        <Container>
          <div className="review__header">
            <div className="review__author">
              <p>
                {review.author.name} {review.author.surname}
              </p>
            </div>
            <div className="review__rating">
              {`★`.repeat(parseInt(review.rating))}
              {`☆`.repeat(5 - parseInt(review.rating))}
            </div>
            <div className="review__time">
              {formatDistanceToNow(new Date(review.createdAt), {
                addSuffix: true
              })}
            </div>
          </div>
          <div className="review__body">
            <p>{review.text}</p>
          </div>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Reviews;

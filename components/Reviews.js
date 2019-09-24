import React, { Component } from "react";
import styled from "styled-components";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ReviewStyles from "./styles/ReviewStyles";
const Wrapper = styled.div`
  h2 {
    font-size: 4rem;
    font-weight: 600;
  }
`;

const Reviews = props => {
  return (
    <Wrapper>
      <h2>Reviews ({props.reviews.length})</h2>
      {props.reviews.map(review => (
        <ReviewStyles>
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
        </ReviewStyles>
      ))}
    </Wrapper>
  );
};

export default Reviews;

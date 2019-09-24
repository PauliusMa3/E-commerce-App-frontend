import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Head from "next/head";
import formatCurrency from "./utils/formatCurrency";
import AddToCart from "../components/AddToCart";
import AddReview from "./addReview";
import Reviews from "./Reviews";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      reviews {
        text
        rating
        createdAt
        author {
          name
          surname
        }
      }
    }
  }
`;

const SingleProdcutStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 1fr;
  margin-top: 100px;

  h4 {
    margin: 0;
    .star {
      font-size: 4rem;
      margin-right: 1rem;
      color: ${props => props.theme.yellow};
    }

    .average__rating {
      font-size: 2rem;
    }
  }

  grid-gap: 2rem;
  justify-items: center;
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }

  p {
    font-size: 1.5rem;
    line-height: 2;
    white-space: pre-wrap;
    text-align: left;
  }

  h2 {
    padding: 1rem 0rem;
    font-size: 3rem;
  }

  span {
    padding: 2rem 0rem;
  }

  .details {
    margin: 2rem;
    font-size: 2rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
`;

const SingleProduct = props => {
  const { id } = props;
  return (
    <Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        const sum = data.item.reviews.reduce(
          (acc, item) => acc + item.rating,
          0
        );
        const averageRating =sum / data.item.reviews.length;
        if (error) return <p>{error.message}</p>;
        const { title, image, price, description, id, reviews } = data.item;
        return (
          <Wrapper>
            <SingleProdcutStyles>
              <Head>
                <title>{title}</title>
              </Head>
              {image && <img src={image} />}
              <div className="details">
                <h2>{title}</h2>
                <h4>
                  <span className="star">{`★`}</span>
                  <span className="average__rating">{averageRating.toFixed(2) } / 5</span>
                </h4>
                <span>{formatCurrency(price)}</span>
                <AddToCart id={id} />
                <p>{description}</p>
              </div>
            </SingleProdcutStyles>
            <AddReview id={id} />
            <Reviews reviews={reviews} />
          </Wrapper>
        );
      }}
    </Query>
  );
};

export default SingleProduct;

export { SINGLE_ITEM_QUERY };

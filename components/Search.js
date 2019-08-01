import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";
import formatCurrency from "./utils/formatCurrency";

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
      price
    }
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem auto;
  position: relative;
  width: 80%;

  @media (max-width: 600px) {
    width: 100%;
  }

  box-sizing: border-box;

  .product-list__item {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
  }

  .product-card {
    display: grid;
    grid-template-columns: 110px 1fr auto;
    align-items: center;
    position: relative;
    grid-auto-rows: 150px;
    padding: 1.3rem;
    img {
      width: 100px;
      object-fit: cover;
      margin-right: 1rem;
    }

    a {
      text-decoration: none;
      font-size: 1.8rem;
      color: ${props => props.theme.black};
      transition: all 0.4s;

      &:hover,
      &:active {
        text-decoration: underline;
      }
    }

    span {
      font-size: 1.8rem;
      color: ${props => props.theme.red};
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

class Search extends Component {
  render() {
    return (
      <Query
        query={SEARCH_ITEMS_QUERY}
        variables={{ searchTerm: this.props.q }}
      >
        {({ data, loading, error }) => {
          if (error) return <p>Search field cannot be empty!</p>;
          return (
            <Container>
              <p>Searching for "{this.props.q}"</p>
              <ProductList>
                {data.items.map(item => (
                  <li className="product-list__item">
                    <div className="product-card">
                      <img src={item.image} />
                      <Link
                        href={{ pathname: "/product", query: { id: item.id } }}
                      >
                        <a>{item.title}</a>
                      </Link>
                      <span>{formatCurrency(item.price)}</span>
                    </div>
                  </li>
                ))}
              </ProductList>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default Search;

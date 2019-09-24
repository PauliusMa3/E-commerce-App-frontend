import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";
import formatCurrency from "./utils/formatCurrency";
import SearchResultListStyles from './styles/SearchResultListStyles';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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
              <SearchResultListStyles>
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
              </SearchResultListStyles>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default Search;

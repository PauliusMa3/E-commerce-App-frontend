import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";
import { perPage } from "../config";
import Left from "../assets/icons/left-arrow.svg";
import Right from "../assets/icons/arrow-point-to-right.svg";
import Router from "next/router";

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.8rem 0;
  img {
    height: 20px;
  }

  button {
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
    background: white;
    border: none;

    /* &:focus {
      background: red;
    } */

    &[disabled] {
      opacity: 0.5;
    }
  }

  p {
    font-size: 1.6rem;
  }

  .active {
    background: red;
  }
`;

const PageLinkStyles = styled.div`
  a {
    padding: 1rem;
    text-decoration: none;
    font-size: 2rem;
    color: ${props => props.theme.black};
    font-weight: 700;
  }

  a.clicked {
    background: red;
    border-radius: 50%;
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

class Pagination extends Component {
  render() {
    return (
      <Query query={PAGINATION_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          const totalProducts = data.itemsConnection.aggregate.count;
          const pages = Math.ceil(totalProducts / perPage);

          const pagesArray = Array.from(
            { length: pages },
            (value, index) => index + 1
          );

          console.log("pages array", pagesArray);
          const page = this.props.page;
          return (
            <PaginationStyles>
              <button
                disabled={page <= 1}
                onClick={() => Router.push(`/products?page=${page - 1}`)}
              >
                <img src={Left} />
              </button>

              <p>
                Page {page} of {pages}
              </p>
              <button
                disabled={page >= pages}
                onClick={() => Router.push(`/products?page=${page + 1}`)}
              >
                <img src={Right} />
              </button>
            </PaginationStyles>
          );
        }}
      </Query>
    );
  }
}

export default Pagination;

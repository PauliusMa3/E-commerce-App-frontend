import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import styled from "styled-components";
import { perPage } from "../config";
import Left from "../assets/icons/left-arrow.svg";
import Right from "../assets/icons/arrow-point-to-right.svg";
import Router from "next/router";
import PaginationStyles from "./styles/PaginationStyles";

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
        {({ data, loading, error }) => {;
          if (loading) return <p>loading...</p>;
          const totalProducts = data.itemsConnection.aggregate.count;
          const pages = Math.ceil(totalProducts / perPage);

          const pagesArray = Array.from(
            { length: pages },
            (value, index) => index + 1
          );
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

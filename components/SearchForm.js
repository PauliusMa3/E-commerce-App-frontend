import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";

import styled from "styled-components";
import Router from "next/router";
import SearchIcon from "../assets/icons/search.svg";
import gql from "graphql-tag";
import SearchFormStyles from "./styles/SearchFormStyles";

const LOCAL_SEARCH_QUERY = gql`
  query {
    searchOpen @client
  }
`;

const LOCAL_SEARCH_MUTATION = gql`
  mutation {
    toggleSearchOpen @client
  }
`;

const Dropdown = styled.div`
  width: 100%;
  transform: translateY(-100%);
  ${props => props.open && `transform: translateY(0)`};
  transition: all 0.4s cubic-bezier(0.29, 0.63, 0.44, 1);
  display: flex;
  z-index: 5;

  justify-content: center;
  align-items: center;
  position: fixed;
  top: 100px;
  height: 100px;
  background: ${props => props.theme.lightGrey100};
`;

class SearchForm extends Component {
  state = {
    items: [],
    loading: false,
    search: ""
  };

  changeHandler = e => {
    this.setState({ search: e.target.value });
  };

  submitHandler = async (e, toggleSearchOpen) => {
    e.preventDefault();
    await toggleSearchOpen();
    await Router.push({
      pathname: "/search",
      query: {
        q: this.state.search
      }
    });
  };

  render() {
    return (
      <Query query={LOCAL_SEARCH_QUERY}>
        {({ data }) => {
          return (
            <Mutation mutation={LOCAL_SEARCH_MUTATION}>
              {toggleSearchOpen => (
                <Dropdown open={data.searchOpen}>
                  <SearchFormStyles
                    onSubmit={e => this.submitHandler(e, toggleSearchOpen)}
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      value={this.state.search}
                      onChange={this.changeHandler}
                    />
                    <button>
                      <img
                        src={SearchIcon}
                        onClick={toggleSearchOpen}
                        alt="search icon"
                      />
                    </button>
                  </SearchFormStyles>
                </Dropdown>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default SearchForm;

export { LOCAL_SEARCH_MUTATION };
export { LOCAL_SEARCH_QUERY };

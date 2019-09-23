import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";

import styled from "styled-components";
import Router from "next/router";
import SearchIcon from "../assets/icons/search.svg";
import gql from "graphql-tag";

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

const Form = styled.form`
  position: relative;
  width: 60%;

  input {
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1.8rem;
    border: 1px solid ${props => props.theme.lightgrey};
    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 0;
    background: ${props => props.theme.lightgrey};
    height: 100%;
    width: 50px;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;

    &:focus,
    &:active {
      outline: none;
    }

    &:hover {
      background: ${props => props.theme.grey};
    }

    img {
      height: 20px;
      z-index: 100;
    }
  }
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
          console.log("Search Open local state: ", data.searchOpen);
          return (
            <Mutation mutation={LOCAL_SEARCH_MUTATION}>
              {toggleSearchOpen => (
                <Dropdown open={data.searchOpen}>
                  <Form onSubmit={e => this.submitHandler(e, toggleSearchOpen)}>
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
                  </Form>
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

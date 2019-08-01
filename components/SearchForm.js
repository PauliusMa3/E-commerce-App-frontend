import React, { Component } from "react";
import { Query } from "react-apollo";

import styled from "styled-components";
import Router from "next/router";
import SearchIcon from "../assets/icons/search.svg";

const Form = styled.form`
  position: relative;
  input {
    width: 100%;
    padding: 0.7rem 1.2rem;
    font-size: 1.6rem;

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

  submitHandler = e => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: {
        q: this.state.search
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.changeHandler}
        />
        <button>
          <img src={SearchIcon} alt="search icon" />
        </button>
      </Form>
    );
  }
}

export default SearchForm;

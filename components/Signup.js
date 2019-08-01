import React, { Component } from "react";
import Form from "./styles/Form";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Error from "./Error";
import { USER_QUERY } from "./User";
import Router from "next/router";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;
const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $surname: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, surname: $surname, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class Signup extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: USER_QUERY }]}
      >
        {(signup, { loading, error }) => (
          <Wrapper>
            <Form
              onSubmit={async e => {
                e.preventDefault();

                await signup();

                Router.push("/products");

                this.setState({
                  name: "",
                  surname: "",
                  email: "",
                  password: ""
                });
              }}
            >
              <fieldset disabled={loading}>
                <label htmlFor="name">
                  Name:
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                    required
                  />
                </label>
                <label htmlFor="surname">
                  Surname:
                  <input
                    id="surname"
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={this.state.surname}
                    onChange={this.changeHandler}
                    required
                  />
                </label>
                <label htmlFor="email">
                  Email:
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                    required
                  />
                </label>
                <label htmlFor="password">
                  Password:
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autocomplete="off"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    required
                  />
                </label>
                {error ? <Error error={error.message} /> : null}

                <button className="product-form--button" type="Submit">
                  Signup
                </button>
              </fieldset>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}

export default Signup;

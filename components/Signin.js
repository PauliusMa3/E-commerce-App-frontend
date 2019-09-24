import React, { Component } from "react";
import Form from "./styles/Form";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import { USER_QUERY } from "./User";
import Link from "next/link";
import styled from "styled-components";
import Error from "./Error";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .password-reset-link {
    font-size: 1rem;
    margin: 1rem auto;
  }
  a {
    padding: 2rem;
    font-size: 1.2rem;
    color: ${props => props.theme.black};
    margin: 0 auto;
  }
`;

const StyledLink = styled.a`
  font-size: 1.2rem;
  color: red;
  align-items: center;
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: USER_QUERY }]}
      >
        {(signin, { loading, error }) => {
          return (
            <Wrapper>
              <Form
                onSubmit={async e => {
                  e.preventDefault();

                  await signin();

                  Router.push("/products");
                }}
              >
                <fieldset disabled={loading}>
                  <label htmlFor="email">
                    Email:
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </label>
                  <label htmlFor="password">
                    Password:
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="off"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </label>
                  {error ? <Error error={error.message} /> : null}

                  <button className="product-form--button" type="Submit">
                    Signin
                  </button>
                </fieldset>
                <Link href="/requestReset">
                  <a>Forgot Password? Request reset</a>
                </Link>
              </Form>
              <Link href="/signup">
                <a>Not yet a member? Create an account</a>
              </Link>
            </Wrapper>
          );
        }}
      </Mutation>
    );
  }
}

export default Signin;

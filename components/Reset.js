import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import { USER_QUERY } from "./User";
import Error from "./Error";
import Router from "next/router";

const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword(
    $password: String!
    $confirmPassword: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    ) {
      id
    }
  }
`;

class Reset extends Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          resetToken: this.props.resetToken
        }}
        refetchQueries={[{ query: USER_QUERY }]}
      >
        {(resetPassword, { loading, error }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();

                await resetPassword();

                this.setState({
                  password: "",
                  confirmPassword: ""
                });

                Router.push("/products");
              }}
            >
              <fieldset disabled={loading}>
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
                <label htmlFor="confirmPassword">
                  Password:
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    value={this.state.confirmPassword}
                    onChange={this.changeHandler}
                  />
                </label>
                {error ? <Error error={error.message} /> : null}

                <button className="product-form--button" type="Submit">
                  Reset Password
                </button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Reset;

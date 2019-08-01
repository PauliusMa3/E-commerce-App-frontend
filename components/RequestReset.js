import React, { Component } from "react";
import Form from "./styles/Form";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "./Error";
import styled from "styled-components";
import Spinner from "./Spinner/Spinner";

const RESET_REQUEST_MUTATION = gql`
  mutation requestReset($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;

  p {
    font-size: 1.6rem;
    color: ${props => props.theme.green};
  }
`;
class RequestReset extends Component {
  state = {
    email: ""
  };

  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  render() {
    return (
      <Mutation mutation={RESET_REQUEST_MUTATION} variables={this.state}>
        {(requestReset, { loading, error, called }) => (
          <Wrapper>
            <Form
              onSubmit={async e => {
                e.preventDefault();

                await requestReset();
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                {error ? <Error error={error.message} /> : null}
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>

                <button className="product-form--button" type="Submit">
                  {loading ? <Spinner /> : "Request reset"}
                </button>
                {!error && !loading && called && (
                  <p>Password reset email was sent to your Mail.</p>
                )}
              </fieldset>
            </Form>
          </Wrapper>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;

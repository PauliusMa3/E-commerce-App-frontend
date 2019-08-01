import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
      message
    }
  }
`;

const Signout = () => {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[{ query: USER_QUERY }]}
    >
      {signout => (
        <button onClick={signout}>Sign out</button>
      )}
    </Mutation>
  );
};

export default Signout;

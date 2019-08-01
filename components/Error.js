import React, { Component } from "react";
import styled from "styled-components";

const ErrorStyles = styled.div`
  p {
    font-size: 1.5rem;
    color: ${props => props.theme.red};
  }
`;

const Error = props => {
  if (!props.error) return null;
  return (
    <ErrorStyles>
      <p>{props.error.replace("GraphQL error: ", "")}</p>
    </ErrorStyles>
  );
};

export default Error;
